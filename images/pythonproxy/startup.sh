#!/bin/bash

PROXY_DIR="/tmp/appd/run"
if [ "x${APPD_PROXY_CONTROL_PATH}" != "x" ]; then
    PROXY_DIR=${APPD_PROXY_CONTROL_PATH}
fi

mkdir -p ${PROXY_DIR}
chmod 755 ${PROXY_DIR}


pip install -U appdynamics


pyagent proxy start
while :
do
	sleep 1
done