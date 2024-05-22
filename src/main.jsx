import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./App.css"
import { twMerge } from "tailwind-merge"
import "primeicons/primeicons.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import { PrimeReactProvider } from "primereact/api"
import Tailwind from "primereact/passthrough/tailwind"
import "react-toastify/dist/ReactToastify.css"
import { ThemeSwitcherComponent } from "./components/index.jsx"
import { AuthProvier } from "./context/AuthContext.jsx"
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: Tailwind,
        ptOptions: {
          mergeSections: true,
          mergeProps: true,
          classNameMergeFunction: twMerge,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvier>
            <App />
          </AuthProvier>
        </BrowserRouter>
      </QueryClientProvider>
    </PrimeReactProvider>
  </React.StrictMode>
)
