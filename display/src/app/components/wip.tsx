'use client'
import { IoConstructSharp } from "react-icons/io5";

const WIP = () => {
    return (
        <div className="flex flex-auto justify-between mt-40">
          <IoConstructSharp className="text-emerald-400 size-20 ml-10"/>
          <div>
            <p className=" mr-10 font-mono text-3xl text-gray-100">
              Sorry!
            </p>
            <p className=" mr-10 font-mono text-3xl text-gray-100">
              We are still working on this page.
            </p>
          </div>
        </div> 
    )
}

export default WIP;