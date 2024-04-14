"use client"
import Header from "rbrgs/app/components/header";
import MenuButton from "rbrgs/app/components/MenuButton";
import { useState } from "react";


const CameraPage = () => {

  const [topic, setTopic] = useState<string>("/zed2/zed_node/rgb/image_rect_color");

  return (
    <div className="p-8 h-screen">
        <Header title="Navigation" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
            Watch where FRIDA is and where they're going
        </p>
        <div>
          <MenuButton/>
        </div> 
        

    </div>
  )
}

export default CameraPage;


/*
import { Menu } from '@headlessui/react'
import exp from 'constants'

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default MyDropdown
*/