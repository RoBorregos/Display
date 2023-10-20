'use client'
import { useState } from 'react'
import ROSLIB from 'roslib'

const RosSub = () => {
    const [status, setStatus] = useState("Not connected")
    const ros = new ROSLIB.Ros({ encoding: 'ascii' } as any)
    const [linear, setLinear] = useState({ x: 0, y: 0, z: 0 })
    const [angular, setAngular] = useState({ x: 0, y: 0, z: 0 })
    const [action, setAction] = useState("infoo")

    //Subscribing to a Topic
    //----------------------

    // Like when publishing a topic, we first create a Topic object with details of the topic's name
    // and message type. Note that we can call publish or subscribe on the same topic object.
    const listener = new ROSLIB.Topic({
        ros: ros,
        name: '/listener',
        messageType: 'std_msgs/String'
    });

    // Then we add a callback to be called every time a message is published on this topic.
    listener.subscribe(function (message: any) {
        console.log('Received message on ' + listener.name + ': ' + message.data);
        setStatus(message.data)
        // If desired, we can unsubscribe from the topic as well.
        // listener.unsubscribe();
    });

    function connect() {
        if (status!=='Connected'){ 
            ros.connect("ws://localhost:9090")
            // won't let the user connect more than once
            ros.on('error', function (error: any) {
                console.log(error)
                setStatus(error)
            })
            ros
            // Find out exactly when we made a connection.
            ros.on('connection', function () {
                console.log('Connected!')
                setStatus("Connected!")
            })

            ros.on('close', function () {
                console.log('Connection closed')
                setStatus("Connection closed")
            })
        }
    }

    function publish() {
        if (status !== 'Connected!') {
            connect()
        }
        const cmdVel = new ROSLIB.Topic({
            ros: ros,
            name: "pose_topic",
            messageType: "geometry_msgs/Pose2D"
        })

        const data = new ROSLIB.Message({
            x: linear.x,
            y: linear.y,
            theta: angular.z
        })

        // publishes to the queue
        console.log('msg', data)
        cmdVel.publish(data)
    }

    return (
        <div className='text-white p-4'>
            <div>
                subscriber
            </div>
            <div>
                {status}
            </div>
            <button className='bg-gray-400 rounded-md p-1' onClick={() => connect()}>connect</button>
            <div className='text-blue-200'>
                {action}
            </div>
        </div>
    )

}

export default RosSub;

