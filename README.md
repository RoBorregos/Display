# Display

Display implementation for the Robocup @Home competition. 

This repository is a sub-module of [home-hri](https://github.com/RoBorregos/home-hri), the instructions below use paths relative to its root folder.


## Instructions to run


1. Create the docker container

```bash
# In root folder of home-hri
make hri.build.display # Create the docker image
make hri.create.jetson # Create container
make hri.shell.display # Enter the container
```

Inside the docker container:

```bash
# Export the values of the Roscore (if roscore is running in external devices)
export ROS_MASTER_URI=http://192.168.31.23:11311 # Ip of roscore + port
export ROS_IP=192.168.31.31 #Your IP

# Start the server
npm --prefix /workspace/display/display run start 
```

Since the provided port in package.json is 8080, you can access the webpage through that port. Considering the configuration of the docker provided in run.bash, the port is also accessible through the host device.


2. Set up the websocket server 

In the pages that access ros topics (i.e. display/display/src/app/(pages)/info/page.tsx), the websocket server to connect to is specified (i.e. ws://192.168.31.23:9090). In order for the page to work, make sure to launch the websocket server in that ip address.

As an example of setting the websocket server with the current ip address:

```bash

# In host@192.168.31.23
# Install rosbridge_server: http://wiki.ros.org/rosbridge_suite/Tutorials/RunningRosbridge

# Start the server
roslaunch rosbridge_server rosbridge_websocket.launch
```


3. Viewing the webpage

Lastly, to view the webpage, it may be necessary to disable security measures to avoid WebSocket SSL Error for webviz.

```bash
# Initialize web browser with disabled security options
# If accessing browser from the same device
google-chrome --allow-running-insecure-content --args 'http://localhost:8080/control'

# If server is running in another device
google-chrome --allow-running-insecure-content --args 'http://[ip]:8080/control'
```