import React from "react"
import { Route, Routes } from "react-router-dom"
import { RootLayout } from "./layout"
import { CheckTransactionPage, HomePage } from "./pages"
import { ROUTE_URLS } from "./utils/enums"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path={ROUTE_URLS.CHECK_TRANSACTION_ROUTE_URL}
          element={<CheckTransactionPage />}
        />
      </Route>
    </Routes>
  )
}
export default App
