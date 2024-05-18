import { InputText } from "primereact/inputtext"
import { classNames } from "primereact/utils"
import { Controller } from "react-hook-form"

function TextInput({
  label = "",
  name,
  control,
  required,
  focusOptions,
  disabled = false,
  floatLabel = false,
  onChange,
  type = "text",
  placeHolder = "",
  errorMessage = "This field is required!",
  showErrorMessage = true,
  ...props
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field, fieldState }) => (
        <>
          <label htmlFor={field.name}>{label}</label>
          <span className={floatLabel ? "p-float-label" : ""}>
            <InputText
              disabled={disabled}
              id={field.name}
              value={field.value}
              ref={field.ref}
              onChange={(e) => {
                field.onChange(e.target.value)
                if (onChange) {
                  onChange(e)
                }
              }}
              //   pt={{
              //     root: { style: { padding: "0.3rem 0.4rem", fontSize: ".9em" } },
              //   }}
              onKeyDown={(e) => {
                if (focusOptions) {
                  if (e.key === "Enter") {
                    focusOptions()
                  }
                }
              }}
              pt={{
                root: {
                  style: {
                    width: "100%",
                    padding: "0.1rem 0.3rem",
                    fontSize: ".9em",
                  },
                },
              }}
              className={classNames({
                "p-invalid": fieldState.error,
              })}
              autoComplete="off"
              type={type}
              {...props}
              placeholder={placeHolder}
            />
            {showErrorMessage && (
              <>
                <span className="text-danger text-sm">
                  {fieldState.error ? errorMessage : ""}
                </span>
              </>
            )}
          </span>
        </>
      )}
    />
  )
}

export default TextInput
