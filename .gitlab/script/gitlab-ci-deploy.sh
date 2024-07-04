#! /bin/sh

STG_PATH="/var/www/summitx/"
STG_OWNER="node"
STG_GROUP="node"
STG_SERVICE_NAME="summitx-front.service"

fatal() {
    echo "FATAL $*"
    exit 1
}

deploy_to_stg() {
    echo "Deploying to stg.summitx.info"

    echo "Creating directories"
    mkdir -p "${STG_PATH}"

    echo "Removing old files from ${STG_PATH}"
    rm -rf "${STG_PATH}/node_modules"

    echo "Copying files to ${STG_PATH}"
    rsync -av --delete \
          --exclude=".git" \
          --exclude=".gitignore" \
          --exclude=".github" \
          --exclude=".gitlab-ci.yml" \
          --exclude=".gitlab" \
          --exclude=".vscode" \
          --exclude=".env" \
          --exclude=".next" \
          ./ "${STG_PATH}"

    echo "Setting permissions"
    chown -R "${STG_OWNER}:${STG_GROUP}" "${STG_PATH}"

    echo "Rebuilding node_modules"
    cd "${STG_PATH}" && npm install --production

    echo "Rebuilding project"
    cd "${STG_PATH}" && npm run build

    echo "Restarting service"
    systemctl restart "${STG_SERVICE_NAME}"

    echo "Deployed to stg.summitx.info"
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
