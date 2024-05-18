import React from "react"
import { Toolbar } from "primereact/toolbar"
import { Button } from "primereact/button"
import { SplitButton } from "primereact/splitbutton"

export default function ToolbarComponent() {
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {
        window.location.href = "https://reactjs.org/"
      },
    },
    { label: "Upload", icon: "pi pi-upload", command: () => {} },
  ]

  const startContent = (
    <React.Fragment>
      <Button
        label="Approve"
        severity="success"
        icon="pi pi-plus"
        className="mr-2"
      />
      <Button label="Decline" severity="danger" icon="pi pi-upload" />
      <i className="pi pi-bars text-gray-700 dark:text-white/80 mr-2" />
      <SplitButton
        label="Save"
        icon="pi pi-check"
        model={items}
        className="p-button-warning"
      ></SplitButton>
    </React.Fragment>
  )

  const endContent = (
    <React.Fragment>
      <Button icon="pi pi-search" className="mr-2" />
      <Button icon="pi pi-calendar" className="p-button-success mr-2" />
      <Button icon="pi pi-times" className="p-button-danger" />
    </React.Fragment>
  )

  return (
    <div className="card">
      <Toolbar start={startContent} end={endContent} />
    </div>
  )
}
