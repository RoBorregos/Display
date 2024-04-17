'use client'
import { useRouter, usePathname } from "next/navigation";
import Header from "rbrgs/app/components/header";
import { FaHome, FaArrowsAlt } from "react-icons/fa";



const ControlPage = () => {   
    
    const router = useRouter();
    const pathName = usePathname(); 

    const handleClick = (route: string) => {
        router.push(`/control/${route}`)
      }
    
    return (
        <div className="p-8 h-screen">
            <Header title="Control" />
            <p className="mt-2 text-neutral-500 text-lg mb-6">
                Choose type of task to execute
            </p>
            <div className="flex">
                <button onClick={() => handleClick("tasks")} className={"h-80 rounded bg-[#707588] hover:bg-[#a4abc8] active:bg-[#bec4dd] mx-5 mt-10 flex-auto"}>
                    <FaHome className="" />
                    <h1>
                        Specific @Home Tasks
                    </h1>
                    <p>
                        Tell FRIDA a particular task to execute
                    </p>
                </button>
                <button onClick={() => handleClick("commands")} className={"h-80 rounded bg-[#707588] hover:bg-[#a4abc8] active:bg-[#bec4dd] mx-5 mt-10 flex-auto"}>
                    <FaArrowsAlt />
                    <h1>
                        General Purpose Commands
                    </h1>
                    <p>
                        Tell FRIDA what specific commands to follow
                    </p>
                </button>
            </div>
        </div>

    )
}

export default ControlPage;