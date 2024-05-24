import React from "react"
import Logo from "../assets/cheque-reliance-logo.png"
const Home = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[90vh]">
      <img
        style={{ objectFit: "contain", height: "500px", width: "500px" }}
        src={Logo}
      ></img>
    </div>
  )
}

export default Home
