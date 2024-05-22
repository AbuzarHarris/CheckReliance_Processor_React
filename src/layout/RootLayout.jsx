import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const RootLayout = () => {
  return (
    <>
      <div>
        <Sidebar />

        <div className="px-2 mt-2">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default RootLayout
