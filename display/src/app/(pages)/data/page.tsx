"use client"
import Header from "rbrgs/app/components/header";
import WIP from "rbrgs/app/components/wip";

const DataPage = () => {

  return (
    <div className="p-8 h-screen">
      <div className="h-1/6">
        <Header title="DataBase" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
            See what data has been stored
        </p>
      </div>
      <div>
        <WIP />
      </div>
    </div>
  )
}

export default DataPage;