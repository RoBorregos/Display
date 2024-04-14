"use client"
import Header from "rbrgs/app/components/header";
import { useState } from "react";

const CameraPage = () => {

  const [taskLayout, setTaskLayout] = useState<string>("layoutCam");

  return (
    <div className="h-screen">
      <div className="p-8 h-1/6">
        <div className="flex flex-row ml-96 absolute">
          <button className={"hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-l active:bg-gray-600 " + (taskLayout == "layoutCam" ? "bg-gray-400" : "bg-gray-300")}
            onClick={() => setTaskLayout("layoutCam")}
          >
            <p>
              Camera
            </p>
          </button>
          <button className={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 active:bg-gray-600 " + (taskLayout == "layoutNav" ? "bg-gray-400" : "bg-gray-300")}
            onClick={() => setTaskLayout("layoutNav")}
          >
            <p>
              Nav
            </p>
          </button>
          <button className={"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded-r active:bg-gray-600 " + (taskLayout == "/detections_image" ? "bg-gray-400" : "bg-gray-300")}
            onClick={() => setTaskLayout("/detections_image")}
          >
            <div>
              Object
            </div>
            <div>
              Detection
            </div>
          </button>
        </div>

        <Header title="Visualize" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
          Select what you want to visualize
        </p>
      </div>
      <div className="w-full h-5/6">
        <iframe className="w-full h-full" src={"https://webviz.io/app/?rosbridge-websocket-url=ws://192.168.31.23:9090&layout-url=https://raw.githubusercontent.com/RoBorregos/Display/main/display/public/layouts/" + taskLayout + ".json"}></iframe>
      </div>
    </div>


  )
  
}

export default CameraPage;