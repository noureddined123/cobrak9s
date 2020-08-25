export APPD_NODE_NAME=$HOSTNAME

/usr/local/bin/pyagent run --use-manual-proxy -c /etc/appdynamics.cfg -- /usr/bin/python main.py