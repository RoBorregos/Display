"use client"
import Header from "rbrgs/app/components/header";
import { useState } from "react";

const CameraPage = () => {

  const [topic, setTopic] = useState<string>("/zed2/zed_node/rgb/image_rect_color");

  return (
    <div className="p-8 h-screen">
        <Header title="Vision" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
            Watch what FRIDA &apos s currently seeing
        </p>
        <iframe className="w-full h-5/6" src="https://webviz.io/app/?rosbridge-websocket-url=ws://192.168.31.23:9090&layout-url=https://raw.githubusercontent.com/RoBorregos/Display/main/display/public/layouts/layoutCam.json"></iframe>
    </div>
  )
}

export default CameraPage;

/*
"use client"
import Header from "rbrgs/app/components/header";
import { useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiConsoleController, GiGrab } from "react-icons/gi";

const CameraPage = () => {
  const [topic, setTopic] = useState("/zed2/zed_node/rgb/image_rect_color");

  return (
    <div>
      <div className="p-8 h-full">
        <div className="flex flex-row ml-96 absolute">
          <button className={"hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-l active:bg-gray-600 " + (topic == "/zed2/zed_node/rgb/image_rect_color" ? "bg-gray-400" : "bg-gray-300")}
            onClick={() => setTopic("/zed2/zed_node/rgb/image_rect_color")}
          >
            <div>
              Normal
            </div>
            <div>
              Vision
            </div>
          </button>
          <button className={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 active:bg-gray-600 " + (topic == "/zed2/zed_node/confidence/confidence_map" ? "bg-gray-400" : "bg-gray-300")}
            onClick={() => setTopic("/zed2/zed_node/confidence/confidence_map")}
          >
            <div>
              Human
            </div>
            <div>
              Recognition
            </div>
          </button>
          <button className={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-r active:bg-gray-600 " + (topic == "/detections_image" ? "bg-gray-400" : "bg-gray-300")}
            onClick={() => setTopic("/detections_image")}
          >
            <div>
              Object
            </div>
            <div>
              Detection
            </div>
          </button>
        </div>

        <Header title="Camera" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
          Select the command to execute
        </p>

      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="w-10/12 border border-10-white">
          <img
            src={"http://localhost:8080/stream?topic=" + topic}
            alt={topic}
            className="w-full h-full" />
        </div>
      </div>
    </div>


  )
}

export default CameraPage;
*/