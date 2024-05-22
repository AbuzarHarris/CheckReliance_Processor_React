import React, { useRef } from "react"
import { Toast } from "primereact/toast"

export default function useToast() {
  const toast = useRef(null)

  const showSuccessToast = ({
    message,
    duration = 1500,
    summary = "Success",
  }) => {
    toast.current.show({
      severity: "success",
      summary: summary,
      detail: message,
      life: duration,
    })
  }

  const showInfoToast = ({ message, duration = 1500, summary = "Info" }) => {
    toast.current.show({
      severity: "info",
      summary: summary,
      detail: message,
      life: duration,
    })
  }

  const showWarnToast = ({ message, duration = 1500, summary = "Warning" }) => {
    toast.current.show({
      severity: "warn",
      summary: summary,
      detail: message,
      life: duration,
    })
  }

  const showErrorToast = ({ message, sticky = true, summary = "Error" }) => {
    toast.current.show({
      severity: "error",
      summary: summary,
      detail: message,
      sticky: sticky,
    })
  }

  return {
    showSuccessToast,
    showErrorToast,
    showWarnToast,
    showInfoToast,
    render: <Toast ref={toast} />,
  }
}
