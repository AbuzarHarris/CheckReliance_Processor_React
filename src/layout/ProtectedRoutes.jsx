import { Navigate } from "react-router-dom"
import { useAuthProvider } from "../context/AuthContext"
import RootLayout from "./RootLayout"

function ProtectedRoutes() {
  const { user } = useAuthProvider()
  return (
    <>
      {user !== null ? (
        <>
          <RootLayout />
        </>
      ) : (
        <>
          <Navigate to={"/auth"} />
        </>
      )}
    </>
  )
}

export default ProtectedRoutes
