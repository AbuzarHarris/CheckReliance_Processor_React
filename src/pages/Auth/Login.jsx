import React from "react"
import { useForm } from "react-hook-form"
import { TextInputField } from "../../components"
import { Button } from "primereact/button"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useToastHook } from "../../hooks"
import { useNavigate } from "react-router-dom"
import { useAuthProvider } from "../../context/AuthContext"
import Logo from "../../assets/cheque-reliance-logo.png"

const API_URL = import.meta.env.VITE_APP_API_URL

const Login = () => {
  const navigate = useNavigate()
  const { showSuccessToast, showErrorToast, render } = useToastHook()
  const { loginUser } = useAuthProvider()

  const method = useForm({
    defaultValues: {
      UserId: "",
      Password: "",
    },
  })

  const mutation = useMutation({
    mutationFn: async (formData) => {
      let response = { message: "", status: 0 }
      try {
        const { data, status } = await axios.post(
          `${API_URL}/Users/User_Get`,
          formData
        )

        if (status === 200) {
          data.UserId = formData.UserId
          loginUser(data)
          navigate("/")
          showSuccessToast({ message: "Login Successful!" })
        } else {
          showErrorToast({ message: data.message, summary: data.status })
        }
      } catch (e) {
        showErrorToast({
          message: e.response.data.Message,
          summary: e.response.data.Status,
        })
      }
    },
    onError: (e) => {
      console.log("err", e)
      //showErrorToast({ message: "Some error occued!" })
    },
  })

  function onSubmit(data) {
    mutation.mutateAsync(data)
  }

  return (
    <div
      style={{ height: "100vh" }}
      className="mx-auto w-full flex items-center justify-center xl:justify-between lg:justify-between  px-4 py-16 sm:px-6 lg:px-8 bg-white flex-col lg:flex-row xl:flex-row"
    >
      <div className="flex items-center mb-[3rem] lg:mb-0 xl:mb-0  justify-center lg:w-[50%]">
        <div className="image-container lg:flex lg:items-center lg:justify-center  ">
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "50%",
              height: "50%",
              objectFit: "contain",
              userSelect: "none",
              margin: "0 auto",
            }}
          />
        </div>
      </div>

      <div className="mx-auto w-full md:w-[50%] lg:w-[25%]">
        <form
          onSubmit={method.handleSubmit(onSubmit)}
          className="mb-0 mt-6 space-y-4 lg:h-[25%] lg:pl-0 xl:pl-0 rounded-lg p-4  sm:p-6 lg:p-8 w-full"
        >
          <h1 className="text-center text-3xl xl:text-4xl lg:text-4xl font-bold">
            PROCESSOR LOGIN
          </h1>

          <div>
            <label htmlFor="UserId" className="font-semibold">
              USERNAME
            </label>

            <div className="relative">
              <TextInputField
                control={method.control}
                name={"UserId"}
                placeHolder="Enter your username"
                rootStyle={{
                  width: "100%",
                  padding: "0.7rem",
                  fontSize: "1rem",
                  boxShadow: "",
                }}
                required={true}
                errorMessage="Please Enter User Name"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="UserId" className="font-semibold">
              PASSWORD
            </label>
            <TextInputField
              control={method.control}
              name={"Password"}
              placeHolder="Enter your password"
              rootStyle={{
                width: "100%",
                padding: "0.7rem",
                fontSize: "1rem",
                boxShadow: "",
              }}
              required={true}
              errorMessage="Please Enter Password"
              type="password"
            />
          </div>

          <Button
            loading={mutation.isPending}
            loadingIcon="pi pi-spin pi-spinner"
            className="block w-full rounded-lg  px-5 py-3 text-sm font-medium text-white text-center"
            label={mutation.isPending ? "Signing in..." : "SIGN IN"}
            pt={{
              root: {
                style: {
                  background: "#13A0FE",
                  borderColor: "#13A0FE",
                  outline: "none",
                },
              },
            }}
          />
        </form>
        {render}
      </div>
    </div>
  )
}

export default Login
