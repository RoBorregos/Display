// Nodejs and ROS libraries
'use client';
import { useState } from "react";
import ROSLIB from "roslib";

// Button props
interface SelectItemProps {
    label: string;
    command: string;
}

// Button component
const SelectItem: React.FC<SelectItemProps> = ({ label, command }) => {
    
    const [status, setStatus] = useState("Not connected"); // Connection to ROS state hook
    const ros = new ROSLIB.Ros({ encoding: 'ascii' } as any) // ROS component

    // Connect to ROS
    function connect() {

        // Connect to port 9090
        ros.connect("ws://192.168.31.23:9090")
        
        // Connection success
        ros.on('connection', function() {
            console.log('Connected!')
            setStatus("Connected!")
        })

        // Connection error
        ros.on('error', function(error: any) {
            console.log(error)
            setStatus(error)
        })
        
        // Connection closed
        ros.on('close', function() {
            console.log('Connection closed')
            setStatus("Connection closed")
        })
    }

    // Publish the command to the ROS queue
    function publish(actionDisplay: string, complementDisplay: string) {
        
        // Connect if not connected
        if (status !== 'Connected!') {
            connect()
        }

        // Define command topic
        const cmd = new ROSLIB.Topic({
            ros: ros,
            name: "/display_command",
            messageType: "frida_hri_interfaces/CommandList" 
        })
        
        // Define command message
        const data = new ROSLIB.Message({
            commands : {
                action : actionDisplay.toLowerCase(),
                characteristic : "",
                complement : complementDisplay.toLowerCase(),
            }
        })
        
        // Publish the command
        console.log('msg', data)
        cmd.publish(data)
    }

    // Publish and log the command
    const handleClick = () => {
        console.log(command + " " + label)
        publish(command, label)
    }

    // Button
    return (
        <div>
            <button onClick={handleClick} className="text-gray-100 bg-neutral-800 hover:bg-neutral-700 my-4 mx-8 mr-10 p-4 rounded-xl ring-1 ring-offset-0 ring-neutral-500 flex flex-col justify-center w-full">
                {label}
            </button>
        </div>
    )
}

// Export button
export default SelectItem;