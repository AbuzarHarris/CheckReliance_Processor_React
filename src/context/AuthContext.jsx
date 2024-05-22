import { useContext, useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvier = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  function loginUser(data, navigateToDashBoard = true) {
    localStorage.setItem("user", window.btoa(JSON.stringify(data)))
    setUser(data)
    if (navigateToDashBoard) {
      navigate("/", { replace: true })
    }
  }

  function updateUserName(username) {
    let existingUserObj = JSON.parse(localStorage.getItem("user"))
    existingUserObj.username = username
    localStorage.setItem("user", JSON.stringify(existingUserObj))
    setUser(existingUserObj)
  }

  function logoutUser() {
    localStorage.removeItem("user")
    setUser(null)
    navigate("/auth")
  }

  useEffect(() => {
    function checkUser() {
      try {
        if (!user) {
          const userData = localStorage.getItem("user")
          if (userData !== null) {
            setUser(JSON.parse(window.atob(userData)))
            navigate(location.pathname + location.search)
          } else {
            setUser(null)
            navigate("/auth")
          }
        }
      } catch (e) {
        console.error(e)
      }
    }
    checkUser()
  }, [user, navigate])

  return (
    <AuthContext.Provider
      value={{ user, loginUser, logoutUser, setUser, updateUserName }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthProvider() {
  const { user, loginUser, logoutUser, setUser } = useContext(AuthContext)
  return {
    user,
    loginUser,
    logoutUser,
    setUser,
  }
}
