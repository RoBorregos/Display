"use client"
import Header from "rbrgs/app/components/header";
import { useState } from "react";


const DiagnosticsPage = () => {

  return (
    <div className="h-screen">
      <div className="p-8 h-1/6">
        <Header title="Diagnostics" />
        <p className="mt-2 text-neutral-500 text-lg mb-6">
            See what the current hardware status is
        </p>
      </div>
      <div className="w-full h-5/6">
        <iframe className="w-full h-full" src={"https://webviz.io/app/?rosbridge-websocket-url=ws://192.168.31.23:9090&layout-url=https://raw.githubusercontent.com/Francisco-SP3/Display/main/display/public/layouts/layoutDiagnostics.json"}></iframe>
      </div>
    </div>
  )
}

export default DiagnosticsPage;
