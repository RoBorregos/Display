"use client"
import Header from "rbrgs/app/components/header";
//import LayoutsButton from "rbrgs/app/components/LayoutsButton";
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheck, FaCoffee } from "react-icons/fa";
import { MdSensorDoor } from "react-icons/md";
import { BsCameraFill, BsFillHandbagFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiGrab } from "react-icons/gi";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

const tasks = [
  { name: 'Camera', icon: <BsCameraFill className="size-6" />, layout: "layoutCam" },
  { name: 'Manipulation', icon: <GiGrab className="size-6" />, layout: "layoutMan"},
  { name: 'Navigation', icon: <FaMapLocationDot className="size-6" />, layout: "layoutNav"},
  { name: 'Breakfast', icon: <FaCoffee className="size-6" />, layout: "layoutBreakfast"},
  { name: 'Groceries', icon: <RiArchiveDrawerFill className="size-6" />, layout: "layoutGroceries"},
  { name: 'Luggage', icon: <BsFillHandbagFill className="size-6" />, layout: "layoutLuggage"},
  { name: 'Recepcionist', icon: <MdSensorDoor className="size-6" />, layout: "layoutRecepcionist"},
]

const VisualPage = () => {

  const [selected, setSelected] = useState(tasks[0])

  return (
    <div className="h-screen">
      <div className="p-8 h-1/6">
        <div className="flex flex-row ml-96 absolute">

          <div className="fixed top-9 w-50">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative flex w-full cursor-default rounded-lg border-2 border-[#707588] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-[#707588] focus-visible:ring-2 focus-visible:ring-[#707588] focus-visible:ring-offset-2 focus-visible:ring-offset-[#bec4dd] sm:text-sm text-white font-bold">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    {selected.icon}
                  </span>
                  <span className="block truncate items-center inset-y-0 ml-8 w-full h-8 text-3xl font-mono font-thin">
                    {selected.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <IoMdArrowDropdown />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-0 max-h-96 w-full overflow-auto rounded-md bg-neutral-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm text-white">
                    {tasks.map((task, taskIdx) => (
                      <Listbox.Option
                        key={taskIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-[#707588] text-white' : 'text-white'
                          }`
                        }
                        value={task}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {task.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                <FaCheck />
                              </span>
                            ) : (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                <GoDotFill />
                              </span>
                            )}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

        </div>

        <Header title="Visualize" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
          Select what you want to visualize
        </p>
      </div>
      <div className="w-full h-5/6">
        <iframe className="w-full h-full" src={"https://webviz.io/app/?rosbridge-websocket-url=ws://192.168.31.23:9090&layout-url=https://raw.githubusercontent.com/Francisco-SP3/Display/main/display/public/layouts/" + selected.layout + ".json"}></iframe>
      </div>
    </div>

  )
}

export default VisualPage;
