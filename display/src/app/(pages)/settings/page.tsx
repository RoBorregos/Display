"use client"
import Header from "rbrgs/app/components/header";
import WIP from "rbrgs/app/components/wip";

const SettingsPage = () => {

  return (
    <div className="p-8 h-screen">
      <div className="h-1/6">
        <Header title="Settings" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
          Change the settings of the display
        </p>
      </div>
      <div>
        <WIP />
      </div>
    </div>
  )
}

export default SettingsPage;