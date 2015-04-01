#!/usr/bin/env bash

set -e

pushd api
docker build -f Dockermake -t node-api-builder .
docker run --rm node-api-builder tar -cf - . | docker build -t base-node-api -
docker run --rm base-node-api test
popd
