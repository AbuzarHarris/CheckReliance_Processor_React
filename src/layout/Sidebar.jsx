import React, { useRef, useState } from "react"
import MenubarComponent from "./Menubar"
import { useClickOutside } from "primereact/hooks"
import { Link } from "react-router-dom"
import { useAuthProvider } from "../context/AuthContext"
import { confirmDialog } from "primereact/confirmdialog"
import { ROUTE_URLS } from "../utils/enums"
import Logo from "../assets/cheque-reliance-logo.png"
import { DollarSign, LayoutDashboard, LogOut, Store } from "lucide-react"

const Sidebar = () => {
  const [visible, setVisible] = useState(false)
  const classesToAppy = visible
    ? "fixed top-0 left-0 flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-100 text-gray-800"
    : "hidden"
  const sideBarRef = useRef(null)

  useClickOutside(sideBarRef, () => {
    if (sideBarRef.current !== null) {
      setVisible(false)
    }
  })

  const closeSidebar = () => {
    setVisible(false)
  }

  return (
    <>
      <MenubarComponent showSidebar={() => setVisible(true)} />
      {visible && (
        //<div className="fixed bg-black inset-0 opacity-50 z-40">
        <div
          className={`${classesToAppy}`}
          ref={sideBarRef}
          style={{ zIndex: 1000 }}
        >
          <div className="fixed flex flex-col top-0 shadow-xl left-0 w-64 bg-white h-full border-r">
            <div className="flex items-center justify-between mx-5 h-14 border-b">
              <div className="flex items-center w-full">
                <div>
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <i
                className="pi pi-times hover:cursor-pointer"
                onClick={() => setVisible(false)}
              ></i>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow">
              <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-500">
                      Menu
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    onClick={closeSidebar}
                    to={"/"}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <LayoutDashboard
                        style={{ width: "20px", height: "20px" }}
                      />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeSidebar}
                    to={ROUTE_URLS.CHECK_TRANSACTION_ROUTE_URL}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <DollarSign style={{ width: "20px", height: "20px" }} />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Pending Transactions
                    </span>
                    {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                      New
                    </span> */}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeSidebar}
                    to={ROUTE_URLS.ENROLL_STORE_ROUTE_URL}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <Store style={{ width: "20px", height: "20px" }} />
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Enroll Store
                    </span>
                    {/* <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                      New
                    </span> */}
                  </Link>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Messages
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Notifications
                    </span>
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                      1.2k
                    </span>
                  </a>
                </li>
                <li className="px-5">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-500">
                      Tasks
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Available Tasks
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Clients
                    </span>
                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                      15
                    </span>
                  </a>
                </li>
                <li className="px-5">
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm font-light tracking-wide text-gray-500">
                      Settings
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Profile
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Settings
                    </span>
                  </a>
                </li> */}
                <LogOutButton />
              </ul>
            </div>
          </div>
        </div>
        //</div>
      )}
    </>
  )
}

export default Sidebar

const LogOutButton = () => {
  const { logoutUser } = useAuthProvider()
  const confirmLogout = () => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => logoutUser(),
      reject: () => null,
    })
  }

  return (
    <li onClick={confirmLogout}>
      <a
        href="#"
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          <LogOut style={{ width: "20px", height: "20px" }} />
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
      </a>
    </li>
  )
}

// import React, { useState } from "react"
// import { Sidebar } from "primereact/sidebar"
// import MenubarComponent from "./Menubar"
// import { Link } from "react-router-dom"
// import { Button } from "primereact/button"

// export default function SidebarComponent() {
//   const [visibleLeft, setVisibleLeft] = useState(false)
//   const items = [
//     {
//       label: "Files",
//       icon: "pi pi-file",
//       items: [
//         {
//           label: "Documents",
//           icon: "pi pi-file",
//           items: [
//             {
//               label: "Invoices",
//               icon: "pi pi-file-pdf",
//               items: [
//                 {
//                   label: "Pending",
//                   icon: "pi pi-stop",
//                 },
//                 {
//                   label: "Paid",
//                   icon: "pi pi-check-circle",
//                 },
//               ],
//             },
//             {
//               label: "Clients",
//               icon: "pi pi-users",
//             },
//           ],
//         },
//         {
//           label: "Images",
//           icon: "pi pi-image",
//           items: [
//             {
//               label: "Logos",
//               icon: "pi pi-image",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: "Cloud",
//       icon: "pi pi-cloud",
//       items: [
//         {
//           label: "Upload",
//           icon: "pi pi-cloud-upload",
//         },
//         {
//           label: "Download",
//           icon: "pi pi-cloud-download",
//         },
//         {
//           label: "Sync",
//           icon: "pi pi-refresh",
//         },
//       ],
//     },
//     {
//       label: "Devices",
//       icon: "pi pi-desktop",
//       items: [
//         {
//           label: "Phone",
//           icon: "pi pi-mobile",
//         },
//         {
//           label: "Desktop",
//           icon: "pi pi-desktop",
//         },
//         {
//           label: "Tablet",
//           icon: "pi pi-tablet",
//         },
//       ],
//     },
//   ]
//   return (
//     <>
//       <MenubarComponent showSidebar={() => setVisibleLeft(true)} />
//       <Sidebar
//         visible={visibleLeft}
//         position="left"
//         onHide={() => setVisibleLeft(false)}
//       >
//         <div className="flex flex-col gap-3">
//           <Link to={"/"}>
//             <Button label="Check Transaction" link />
//           </Link>
//         </div>
//       </Sidebar>
//     </>
//   )
// }
