import { Calendar } from "primereact/calendar"
import { classNames } from "primereact/utils"
import React from "react"
import { Controller } from "react-hook-form"

const DatePicker = ({
  control,
  name = "",
  disabled = false,
  required = false,
  showTime = false,
  showIcon = false,
  dateFormat = "dd-M-yy",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState }) => (
        <>
          <Calendar
            inputId={field.name}
            value={field.value || new Date()}
            onChange={field.onChange}
            dateFormat={dateFormat}
            style={{ width: "100%" }}
            className={classNames({ "p-invalid": fieldState.error })}
            showTime={showTime}
            showIcon={showIcon}
            hourFormat="12"
            disabled={disabled}
            placeholder="Select a date"
            pt={{
              input: {
                root: {
                  style: {
                    width: "100%",
                    padding: "0.1rem 0.4rem",
                    fontSize: ".9em",
                  },
                },
              },
              panel: {
                style: {
                  width: "10%",
                },
              },
            }}
          />
        </>
      )}
    />
  )
}

export default DatePicker
