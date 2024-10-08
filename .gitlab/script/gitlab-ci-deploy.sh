#! /bin/sh

BRANCH_NAME="${CUSTOM_ENV_CI_COMMIT_REF_NAME}"
STG_PATH="/var/www/summitx-stg"
BRANCH_PATH="${STG_PATH}/${BRANCH_NAME}/"
STG_OWNER="node"
STG_GROUP="node"
STG_SERVICE_NAME="summitx-front-branch"
STG_ENV_FILE="/var/lib/summitx-frontend/staging/.env"
NGINX_SITES_PATH="/etc/nginx/sites-enabled/"

# Exit on error
set -e
# Debug output
#set -o xtrace

fatal() {
    echo "$(date +'%F %T') FATAL $*"
    exit 1
}

info() {
    echo "$(date +'%F %T') INFO $*"
}

remove_old_branches() {
    info "Removing old branches from ${STG_PATH}"
    # keep only 5 last branches
    ls -t "${STG_PATH}" | tail -n +6 | while read -r branch_name; do
        info "Removing branch ${branch_name}"
        systemctl disable --now "${STG_SERVICE_NAME}@${branch_name:?}"
        rm -rf "${STG_PATH:?}/${branch_name:?}"
        rm -f "${NGINX_SITES_PATH:?}/summitx--${branch_name:?}.conf"
    done
}

prepare_frontend_sources() {
    info "Preparing frontend sources"
    info "Creating directories"
    mkdir -p "${BRANCH_PATH}"

    info "Removing old files from ${BRANCH_PATH}"
    rm -rf "${BRANCH_PATH}/node_modules"

    info "Copying files to ${BRANCH_PATH}"
    rsync -av --delete \
          --exclude=".git" \
          --exclude=".gitignore" \
          --exclude=".github" \
          --exclude=".gitlab-ci.yml" \
          --exclude=".gitlab" \
          --exclude=".vscode" \
          --exclude=".next" \
          "${CUSTOM_ENV_CI_PROJECT_DIR}/" "${BRANCH_PATH}/"

    info "Setting permissions"
    chown -R "${STG_OWNER}:${STG_GROUP}" "${BRANCH_PATH}"
}

prepare_frontend() {
    info "Preparing frontend"
    port="$1"
    if [ -z "${port}" ]; then
        fatal "Port is required"
    fi

    prepare_frontend_sources

    info "Copying environment file"
    cp "/${STG_ENV_FILE}" "${BRANCH_PATH}/.env"

    echo "Patching package.json to run on specific port"
    sed -i "s/\"start\": \"next start\"/\"start\": \"next start --port ${port}\"/" "${BRANCH_PATH}/package.json"

    info "Installing dependencies with 'npm install'"
    cd "${BRANCH_PATH}"
    npm install

    info "Rebuilding project with 'npm run build'"
    npm run build

    info "Setting permissions after build"
    chown -R "${STG_OWNER}:${STG_GROUP}" "${BRANCH_PATH}"

    info "Starting service"
    systemctl enable --now "${STG_SERVICE_NAME}@${BRANCH_NAME}"
}

generate_nginx_config() {
    info "Generating nginx config"
    port="$1"
    if [ -z "${port}" ]; then
        fatal "Port is required"
    fi

    cat > "${NGINX_SITES_PATH}/summitx--${BRANCH_NAME}.conf" <<EOF
server {
    listen 80;
    server_name ${BRANCH_NAME}.stg.summitx.info;
       root /var/www/html;

        location /favicon.ico {
                return 404;
        }
        location /doc/ {
                include proxy_params;
                proxy_pass http://127.0.0.1:8055;
        }

        location / {
                include proxy_params;
                proxy_pass http://127.0.0.1:${port};
        }

}
EOF

    info "Reloading nginx"
    systemctl reload nginx
}

deploy_to_stg() {
    info "Deploying to ${BRANCH_NAME}.stg.summitx.info"

    remove_old_branches

    port="$(shuf -i 3000-65000 -n 1)"

    prepare_frontend "${port}"
    generate_nginx_config "${port}"

    info "Deployed to http://${BRANCH_NAME}.stg.summitx.info, NextJS is running on port ${port}"

    return 0
}

run() {
    case "${CUSTOM_ENV_CI_JOB_NAME}" in
        deploy_to_stg)
            deploy_to_stg
            ;;
        *)
            fatal "Unknown job name: ${CUSTOM_ENV_CI_JOB_NAME}"
            ;;
    esac
}


if [ -z "$1" ]; then
    fatal "Script argument is required"
fi

if [ -z "$2" ]; then
    fatal "Step name argument is required"
fi

if [ -z "$CUSTOM_ENV_CI_COMMIT_REF_NAME" ]; then
    fatal "CUSTOM_ENV_CI_COMMIT_REF_NAME is not set"
fi

if ! echo "${CUSTOM_ENV_CI_COMMIT_REF_NAME}" | grep -q "^[a-zA-Z0-9_-]*$"; then
    fatal "Ref name '${CUSTOM_ENV_CI_COMMIT_REF_NAME}' is not alphanumeric. Allowed characters are: a-z, A-Z, 0-9, _ and -"
fi

echo "Script '$1', step '$2'"

case "$2" in
    step_script | build_script)
        run
        ;;
    get_sources | upload_artifacts_on_success | upload_artifacts_on_failure | download_artifacts | cleanup_file_variables)
        $1
        ;;
esac
