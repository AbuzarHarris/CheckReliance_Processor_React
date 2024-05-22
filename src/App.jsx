import React from "react"
import { Route, Routes } from "react-router-dom"
import { ProtectedRoutes } from "./layout"
import {
  CheckTransactionPage,
  HomePage,
  LoginPage,
  PendingTransatcionsPage,
} from "./pages"
import { ROUTE_URLS } from "./utils/enums"
import { ToastContainer } from "react-toastify"
import { ConfirmDialog } from "primereact/confirmdialog"

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_URLS.LOGIN_PAGE_ROUTE_URL} element={<LoginPage />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route index element={<HomePage />} />
          <Route
            path={ROUTE_URLS.CHECK_TRANSACTION_ROUTE_URL}
            element={<PendingTransatcionsPage />}
          />
          <Route
            path={`${ROUTE_URLS.CHECK_TRANSACTION_ROUTE_URL}/:TransactionID`}
            element={<CheckTransactionPage />}
          />
        </Route>
      </Routes>
      <ConfirmDialog
        id="EditDeleteDialog"
        draggable={false}
        pt={{
          acceptButton: {
            root: {
              className:
                "items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom transition duration-200 ease-in-out focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)] text-white dark:text-gray-900 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 rounded-md px-4 py-3 text-base",
            },
          },
          rejectButton: {
            root: {
              className:
                "items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom transition duration-200 ease-in-out focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,165,165,0.7),0_1px_2px_0_rgba(0,0,0,0)] text-white dark:text-gray-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500 rounded-md px-4 py-3 text-base",
            },
          },
        }}
      />
      <ToastContainer
        position="top-center"
        pauseOnHover={false}
        theme="light"
        closeOnClick
        autoClose={1500}
        containerId={"autoClose"}
      />
    </>
  )
}
export default App
