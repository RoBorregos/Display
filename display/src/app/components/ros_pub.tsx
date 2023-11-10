'use client'
import { useState } from 'react'
import ROSLIB from 'roslib'

const RosPub = () => {
    const [status, setStatus] = useState("Not connected")
    const ros = new ROSLIB.Ros({ encoding: 'ascii' } as any)
    const [linear, setLinear] = useState({ x: 0, y: 0, z: 0 })
    const [angular, setAngular] = useState({ x: 0, y: 0, z: 0 })

    function connect() {
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
        <div>
            hi
            <button onClick={() => publish()}>connect</button>
        </div>
    )

}

export default RosPub;