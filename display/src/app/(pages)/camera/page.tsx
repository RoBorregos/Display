import { GiConsoleController } from "react-icons/gi";
import { BsCameraFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";
import NavButton from "rbrgs/app/components/NavButton";

const CameraPage = () => {
    return (
      <div>
        <nav
          className="relative flex w-full flex-wrap  bg-[#707588] text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 py-4">
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <button className="mx-12 bg-[#707588] rounded hover:bg-[#a4abc8] py-4 px-4">
              <img
                src="/images/roborregos_logo.png"
                alt="RoBorregos_Logo"
                className="object-scale-down h-24" />
            </button>

            <button className="mx-12 bg-[#707588] rounded hover:bg-[#a4abc8] py-4 px-4">
              <GiConsoleController className="text-6xl font-semibold text-neutral-100" href="#"
                />
            </button>

            <button className="mx-12 bg-[#707588] rounded hover:bg-[#a4abc8] py-4 px-4">
              <BsCameraFill className="text-6xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
                />
            </button>

            <button className="mx-12 bg-[#707588] rounded hover:bg-[#a4abc8] py-4 px-4">
              <FaMapLocationDot className="text-6xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
                />
            </button>

            <button className="mx-12 bg-[#707588] rounded hover:bg-[#a4abc8] py-4 px-4">
              <HiMiniInformationCircle className="text-6xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
                />
            </button>

            
          </div>
          
        </nav>

        <button className="mx-12 bg-[#707588] rounded hover:bg-sky-700 py-4 px-4">
          <HiMiniInformationCircle className="text-6xl font-semibold text-neutral-100 dark:text-neutral-200" href="#"
            />
        </button>

        

      </div>
    )
}

export default CameraPage;