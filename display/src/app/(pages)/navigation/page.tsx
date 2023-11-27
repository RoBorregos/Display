"use client"
import Header from "rbrgs/app/components/header";
import { useState } from "react";

const CameraPage = () => {

  const [topic, setTopic] = useState<string>("/zed2/zed_node/rgb/image_rect_color");

  return (
    <div className="p-8 h-screen">
        <Header title="Navigation Map" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
            View the map and current location of the robot
        </p>
        <iframe className="w-full h-5/6" src="http://localhost:8001/rvizweb/www/index.html"></iframe>
    </div>
  )
}

export default CameraPage;