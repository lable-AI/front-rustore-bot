#!/bin/bash

set -e

BRANCH=${1:-unknown}
ROOT=$(realpath $(dirname $0))
BUILD_DATE=$(date +"%Y-%m-%dT%T")
BUILD_COMMIT_ID=$(git rev-parse HEAD)
cd $ROOT

echo "Build.SH: $BRANCH"

# Generate version.json
echo "Creating version file..."


cat > "$ROOT/public/version.json" <<EOF
{
    "component": "label-ai-front",
    "buildBranch": "$BRANCH",
    "buildDate": "$BUILD_DATE",
    "buildChangeSet": "$BUILD_COMMIT_ID"
}
EOF


echo "Version file created at $ROOT/src/main/resources/version.json"


echo Builing docker image ...
LABEL=`echo "$BRANCH" | tr '[:upper:]' '[:lower:]'`
echo $LABEL

docker build -t label-ai-front:$LABEL .

docker tag label-ai-front:$LABEL raghtnes/hackaton-front:$LABEL

docker push raghtnes/hackaton-front:$LABEL