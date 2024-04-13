"use client"
import Header from "rbrgs/app/components/header";
import { useState } from "react";

const SettingsPage = () => {

  const [topic, setTopic] = useState<string>("/zed2/zed_node/rgb/image_rect_color");

  return (
    <div className="p-8 h-screen">
        <Header title="Settings" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
            Edit the Display settings
        </p>
        
    </div>
  )
}

export default SettingsPage;