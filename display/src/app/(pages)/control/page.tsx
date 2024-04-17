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
            <div className="grid grid-cols-2 gap-16 mr-16">
                <button onClick={() => handleClick("tasks")}>
                    <div className={"bg-neutral-800 hover:bg-neutral-700 my-4 mr-9 mx-8 p-2 rounded-xl ring-1 ring-offset-0 ring-neutral-500 flex flex-col justify-center h-full w-full"}>
                        <div className="bg-neutral-900 p-2 w-fit rounded-lg self-center mb-3">
                            <FaHome className="text-emerald-400 size-60" />
                        </div>
                        <h1 className="font-mono text-4xl text-gray-100">
                            Specific @Home Tasks
                        </h1>
                        <p className="text-neutral-400 text-xl">
                            Tell FRIDA a particular task to execute
                        </p>
                    </div>
                </button>
                <button onClick={() => handleClick("commands")}>
                    <div className={"bg-neutral-800 hover:bg-neutral-700 my-4 mx-8 p-2 rounded-xl ring-1 ring-offset-0 ring-neutral-500 flex flex-col justify-center h-full w-full"}>
                        <div className="bg-neutral-900 p-2 w-fit rounded-lg self-center mb-3">
                            <FaArrowsAlt className="text-emerald-400 size-60" />
                        </div>
                        <h1 className="font-mono text-4xl text-gray-100">
                            {"General Purpose \n Commands"}
                        </h1>
                        <p className="text-neutral-400 text-xl">
                            Tell FRIDA what specific commands to follow
                        </p>
                    </div>
                </button>
            </div>
        </div>

    )
}

export default ControlPage;