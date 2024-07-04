#! /bin/sh

STG_PATH="/var/www/summitx/"
STG_OWNER="node"
STG_GROUP="node"
STG_SERVICE_NAME="summitx-front.service"
STG_ENV_FILE="/var/lib/summitx-frontend/staging/.env"

# Exit on error
set -e
# Debug output
# set -o xtrace

fatal() {
    echo "$(date +'%F %T') FATAL $*"
    exit 1
}

info() {
    echo "$(date +'%F %T') INFO $*"
}

deploy_to_stg() {
    info "Deploying to stg.summitx.info"

    info "Creating directories"
    mkdir -p "${STG_PATH}"

    info "Removing old files from ${STG_PATH}"
    rm -rf "${STG_PATH}/node_modules"

    info "Copying files to ${STG_PATH}"
    rsync -av --delete \
          --exclude=".git" \
          --exclude=".gitignore" \
          --exclude=".github" \
          --exclude=".gitlab-ci.yml" \
          --exclude=".gitlab" \
          --exclude=".vscode" \
          --exclude=".next" \
          "${CUSTOM_ENV_CI_PROJECT_DIR}/" "${STG_PATH}"

    info "Copying environment file"
    cp "/${STG_ENV_FILE}" "${STG_PATH}/.env"

    info "Setting permissions"
    chown -R "${STG_OWNER}:${STG_GROUP}" "${STG_PATH}"

    info "Installing dependencies with 'npm install'"
    cd "${STG_PATH}"
    npm install

    info "Rebuilding project with 'npm run build'"
    npm run build

    info "Restarting service"
    systemctl restart "${STG_SERVICE_NAME}"

    info "Deployed to stg.summitx.info"
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

echo "Script '$1', step '$2'"

case "$2" in
    step_script | build_script)
        run
        ;;
    get_sources | upload_artifacts_on_success | upload_artifacts_on_failure | download_artifacts | cleanup_file_variables)
        $1
        ;;
esac
