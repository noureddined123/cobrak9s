FROM ubuntu:16.04


RUN apt-get update -y && \
    apt-get install -y python-pip python-dev curl


WORKDIR /opt/appdynamics


ADD startup.sh /opt/appdynamics/startup.sh


# ENTRYPOINT ["/opt/appdynamics/startup.sh"]
CMD ["/bin/bash", "/opt/appdynamics/startup.sh" ]