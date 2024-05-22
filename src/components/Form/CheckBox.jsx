import { Checkbox } from "primereact/checkbox"
import React from "react"
import { Controller } from "react-hook-form"

const CheckBox = ({ name, label, disable = false, control, onChange }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <div className="flex items-center">
            <Checkbox
              disabled={disable}
              inputId={field.name}
              checked={field.value}
              inputRef={field.ref}
              onChange={(e) => {
                field.onChange(e.checked)
                if (onChange) {
                  onChange(e)
                }
              }}
            />
            <label htmlFor={field.name} style={{ marginLeft: "5px" }}>
              {label}
            </label>
          </div>
        </>
      )}
    />
  )
}

export default CheckBox
