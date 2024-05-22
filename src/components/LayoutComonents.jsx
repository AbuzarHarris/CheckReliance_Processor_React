import React from "react"

export const FormRow = ({ children, className = "" }) => {
  return (
    <div className={`grid grid-cols-12 gap-4 ${className}`}>{children}</div>
  )
}

export const FormColumn = ({ children, className = "" }) => {
  const combinedClass = `${className}`

  return <div className={combinedClass}>{children}</div>
}

export const FormLabel = ({
  children,
  className = "font-semibold",
  labelFor = "",
}) => {
  return (
    <label
      className={className}
      htmlFor={labelFor === "" ? children : labelFor}
      id={labelFor === "" ? children : labelFor + "_label"}
    >
      {children}
    </label>
  )
}

export const FormField = ({
  col = 12,
  label = "",
  showSteric = false,
  inputTemplate,
}) => {
  return (
    <FormColumn className={`col-span-${col}`}>
      <FormLabel>
        {label}
        {showSteric && <span className="text-red-500 font-bold">*</span>}
      </FormLabel>
      {inputTemplate}
    </FormColumn>
  )
}
