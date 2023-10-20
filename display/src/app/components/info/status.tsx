'use client'
import ROSLIB from 'roslib'
import { useState } from 'react'
import Label from './label'


const Status = () => {
    const ros = new ROSLIB.Ros({ encoding: 'ascii' } as any)
    const [status, setStatus] = useState("Not connected")

    function connect() {
        if (status !== 'Connected') {
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

    return (
        <div className='p-4 mt-3'>
            <div className='flex flex-col gap-3'>
                <Label title="Status" data={status} />
                <Label title="Current" data="Listening..." />
                <Label title="Running" data="Manipulation, Dashgo, Zed" />
                <Label title="Battery" data="100%" />
                <Label title="Commandline" data="Loc [100,200]" />
            </div>
            <button className='bg-gray-400 rounded-md p-1 mt-5' onClick={() => connect()}>connect</button>
        </div>
    )
}

export default Status;