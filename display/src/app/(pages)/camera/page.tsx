"use client"
import { FiMapPin } from "react-icons/fi";
import { GiRobotGrab } from "react-icons/gi";
import { GoPackageDependents } from "react-icons/go";
import { BsPerson, BsSearch, BsSignStop } from "react-icons/bs";
import Header from "rbrgs/app/components/header";
import NavButton from "rbrgs/app/components/NavButton";
import { useState } from "react";

const CameraPage = () => {
    return (
      <div>
        <nav
          className="relative flex h-screen w-36  bg-[#707588] text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600">
          <div className="flex h-screen flex-wrap items-center justify-between">
              <button className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-4 px-9 flex-auto">
                <img
                  src="/images/roborregos_logo.png"
                  alt="RoBorregos_Logo"
                  className="object-scale-down h-16" />
              </button>
  
              <button className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-4 px-10 flex-auto">
                <GiConsoleController className="text-6xl font-semibold text-neutral-100" href="#"
                  />
              </button>
  
              <button className="bg-[#a4abc8] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-5 px-11 flex-auto">
                <BsCameraFill className="text-5xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
                  />
              </button>
  
              <button className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-5 px-11 flex-auto">
                <FaMapLocationDot className="text-5xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
                  />
              </button>
  
              <button className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-5 px-11 flex-auto">
                <GiGrab className="text-5xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
                  />
              </button>
  
              <NavButton route={""} />
            
          </div>

          <div className="w-2/3">
          <img
            src="http://localhost:8080/stream?topic=/zed2/zed_node/rgb/image_rect_color"
            alt="ZED2_Camera"
            className="w-full h-full" />
        </div>

        <div className="w-1/3">
          <img
            src="http://localhost:8080/stream?topic=/zed2/zed_node/rgb/image_rect_color"
            alt="ZED2_Camera"
            className="w-full h-full" />
        </div>
          
        </nav>

        

        <nav
          className="h-screen w-4 bg-[#000000]">
        </nav>

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