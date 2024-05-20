import React from "react"
import { Menubar } from "primereact/menubar"
import { ThemeSwitcherComponent } from "../components"
import { Button } from "primereact/button"
import { Avatar } from "primereact/avatar"
import { useLocation } from "react-router-dom"
import { routesWithFormTitles } from "../utils/enums"

export default function MenubarComponent({ showSidebar }) {
  const endContent = (
    <>
      {/* <ThemeSwitcherComponent /> */}
      <div className="flex gap-2 items-center">
        <Avatar />
        <div className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded">
          <span className="">ADMINISTRATOR</span>
        </div>
        {/* <Button label="Logout" severity="danger" /> */}
      </div>
    </>
  )

  const startConent = (
    <>
      <div className="flex gap-3 items-center w-full justify-between">
        <i
          className="pi pi-align-left hover:cursor-pointer"
          onClick={showSidebar}
        ></i>
        <CurrentPageTitle />
      </div>
    </>
  )

  return (
    <div className="card">
      <Menubar
        end={endContent}
        start={startConent}
        pt={{
          root: {
            style: {
              padding: "0.2rem 1rem",
              background: "white",
            },
          },
          start: {
            style: {
              width: "50%",
            },
          },
        }}
      />
    </div>
  )
}

const CurrentPageTitle = () => {
  const { pathname } = useLocation()
  return (
    <>
      <p className="p-0 m-0 font-bold text-xl">
        {pathname === "/" ? "Home" : routesWithFormTitles[pathname]}
      </p>
    </>
  )
}
