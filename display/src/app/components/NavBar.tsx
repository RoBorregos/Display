'use client'
import { useRouter, usePathname } from "next/navigation";
import { GiConsoleController } from "react-icons/gi";
import { BsCameraFill } from "react-icons/bs";
import { FaMapLocationDot, FaEye } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { GiGrab } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

interface NBProps {
  page?: string;
}

const NavBar: React.FC<NBProps> = ({ page }) => {
  
  const router = useRouter();
  const pathName = usePathname();
  // console.log(pathName);
  const handleClick = (route: string) => {
    router.push(`/${route}`)
  }

  return (
    <div className="fixed">
      <nav
        className="fixed flex h-screen w-36 flex-wrap  bg-[#707588] text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-[#707588]">
        <div className="flex h-screen flex-wrap items-center justify-between">
          <button onClick={() => handleClick("")} className={"rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-4 px-9 flex-auto " + (pathName == "/" ? "bg-[#a4abc8]" : "bg-[#707588]")}>
            <img
              src="/images/roborregos_logo.png"
              alt="RoBorregos_Logo"
              className="object-scale-down h-16" />
          </button>

          <button onClick={() => handleClick("visual")} className={"rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-5 px-11 flex-auto " + (pathName == "/camera" ? "bg-[#a4abc8]" : "bg-[#707588]")}>
            <FaEye className="text-5xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
            />
          </button>

          <button onClick={() => handleClick("control")} className={"rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-4 px-10 flex-auto " + (pathName == "/control" ? "bg-[#a4abc8]" : "bg-[#707588]")}>
            <GiConsoleController className="text-6xl font-semibold text-neutral-100" href="#/control"
            />
          </button>

          <button onClick={() => handleClick("information")} className={"rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-5 px-11 flex-auto " + (pathName == "/information" ? "bg-[#a4abc8]" : "bg-[#707588]")}>
            <HiMiniInformationCircle className="text-5xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
            />
          </button>

          <button onClick={() => handleClick("settings")} className={"rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-5 px-11 flex-auto " + (pathName == "/settings" ? "bg-[#a4abc8]" : "bg-[#707588]")}>
            <IoMdSettings className="text-5xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
            />
          </button>

        </div>

      </nav>

      <nav
        className="h-screen w-4 bg-[#ffffff]">

      </nav>

    </div>
    // <div className="fixed h-screen">
    //   <nav
    //     className=" flex w-full flex-wrap  bg-[#707588] text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 py-4">
    //     <div className="flex w-full flex-wrap items-center justify-between px-3">
    //       <button className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-4 px-4">
    //         <img
    //           src="/images/roborregos_logo.png"
    //           alt="RoBorregos_Logo"
    //           className="object-scale-down h-24" />
    //       </button>

    //       <button className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-7 px-7">
    //         <GiConsoleController className="text-7xl font-semibold text-neutral-100" href="#"
    //         />
    //       </button>

    //       <button className="bg-[#a4abc8] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-8 px-8">
    //         <BsCameraFill className="text-6xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
    //         />
    //       </button>

    //       <button className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-8 px-8">
    //         <FaMapLocationDot className="text-6xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
    //         />
    //       </button>

    //       <button className="bg-[#707588] rounded hover:bg-[#a4abc8] active:bg-[#bec4dd] py-8 px-8">
    //         <GiGrab className="text-6xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
    //         />
    //       </button>

    //       <NavButton route={""} />


    //     </div>

    //   </nav>

    // </div>
  )
}

export default NavBar;

