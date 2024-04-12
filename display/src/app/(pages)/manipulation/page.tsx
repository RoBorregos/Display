"use client"
import Header from "rbrgs/app/components/header";
import { useState } from "react";

const CameraPage = () => {

  const [topic, setTopic] = useState<string>("/zed2/zed_node/rgb/image_rect_color");

  return (
    <div className="p-8 h-screen">
        <Header title="Manipulation" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
            Watch how FRIDA manipulates objects
        </p>
        <iframe className="w-full h-5/6" src="https://webviz.io/app/?rosbridge-websocket-url=ws://192.168.31.23:9090&layout-url=https://raw.githubusercontent.com/RoBorregos/Display/main/display/public/layouts/layoutNav.json"></iframe>
    </div>
  )
}

export default CameraPage;