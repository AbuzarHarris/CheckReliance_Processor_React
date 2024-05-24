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
  dateFormat = "mm/dd/yy",
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
            hideOnDateTimeSelect
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
                  width: "20%",
                  maxWidth: "20%",
                },
              },
              tableHeaderCell: {
                style: {
                  padding: "0.1rem",
                  margin: 0,
                },
              },
              day: {
                style: {
                  padding: "0.1rem",
                  margin: 0,
                },
              },
              dayLabel: {
                style: {
                  padding: 0,
                  margin: 0,
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
