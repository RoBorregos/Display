"use client"
import Header from "rbrgs/app/components/header";
import { useState } from "react";


const DataPage = () => {

  return (
    <div className="p-8 h-screen">
        <Header title="DataBase" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
            See what information has been stored
        </p>
        <div>
          {/* <MenuButton/> */}
        </div> 
        

    </div>
  )
}

export default DataPage;