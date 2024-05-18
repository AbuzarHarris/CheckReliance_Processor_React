import React, { useState } from "react"
import { Dialog } from "primereact/dialog"
import { Controller, useFormContext } from "react-hook-form"
import { TextAreaField } from "../../components"
import { FormColumn, FormRow } from "../../components/LayoutComonents"
import { classNames } from "primereact/utils"
import { Button } from "primereact/button"

const useMakerNotesModal = () => {
  const [visible, setVisible] = useState(false)
  const [maximize, setMaximize] = useState(false)
  const method = useFormContext()

  const notes = [
    {
      CommentID: 1,
      EntryUserID: 1,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 2,
      EntryUserID: 1,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 3,
      EntryUserID: 2,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 4,
      EntryUserID: 23,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 5,
      EntryUserID: 23,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 6,
      EntryUserID: 23,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 7,
      EntryUserID: 23,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 8,
      EntryUserID: 23,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 9,
      EntryUserID: 23,
      Comment: "asjfklasdjfkljasdkljgklasjklgjkl askldnfklasndklfnasldfnklasd",
      FullName: "asdf",
    },
    {
      CommentID: 10,
      EntryUserID: 23,
      Comment: "test",
      FullName: "asdf",
    },
    {
      CommentID: 10,
      EntryUserID: 23,
      Comment: "test",
      FullName: "asdf",
    },
    {
      CommentID: 10,
      EntryUserID: 23,
      Comment: "test",
      FullName: "asdf",
    },
    {
      CommentID: 10,
      EntryUserID: 23,
      Comment: "test",
      FullName: "asdf",
    },
    {
      CommentID: 10,
      EntryUserID: 23,
      Comment: "test",
      FullName: "asdf",
    },
  ]

  const FooterComponet = () => {
    return (
      <>
        <Controller
          id="Comment"
          name="Comment"
          control={method.control}
          render={({ field, fieldState }) => (
            <>
              <textarea
                id={field.name}
                name={field.name}
                value={field.value}
                ref={field.ref}
                onChange={(e) => {
                  field.onChange(e.target.value)
                }}
                rows={1}
                placeholder="Type your comment..."
                className={classNames(
                  "unresize-textarea p-inputtext w-full p-3 m-0 font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] text-base",
                  {
                    "p-invalid": fieldState.error,
                  }
                )}
                onKeyDown={(e) => {
                  if (e.shiftKey && e.key === "Enter") {
                    e.preventDefault()
                    const start = e.target.selectionStart
                    const end = e.target.selectionEnd
                    const newText =
                      e.target.value.substring(0, start) +
                      "\n" +
                      e.target.value.substring(end)
                    e.target.value = newText
                    e.target.selectionStart = e.target.selectionEnd = start + 1
                  } else if (e.key === "Enter" && e.target.value !== "") {
                    method.handleSubmit(onSubmit)()
                  }
                }}
              ></textarea>
            </>
          )}
        />
        <Button icon="pi pi-send" severity="success" />
      </>
    )
  }

  return {
    setVisible,
    render: (
      <Dialog
        header={`Maker Notes`}
        visible={visible}
        // maximizable
        style={{ width: "80vw", height: "60vh" }}
        onHide={() => {
          setVisible(false)
        }}
        position="center"
        onMaximize={() => setMaximize(true)}
        maximized={maximize}
        footer={FooterComponet}
      >
        <div className="flex flex-col" style={{ maxHeight: "50%" }}>
          <ul
            className="w-full flex flex-col gap-2"
            style={{ overflowY: "auto", maxHeight: "50vh" }}
          >
            {notes.map((note) => (
              <SingleNote
                note={note}
                user={{ userID: 2 }}
                key={note.CommentID}
              />
            ))}
          </ul>
        </div>
      </Dialog>
    ),
  }
}

export default useMakerNotesModal

const SingleNote = ({ note, user }) => {
  return (
    <>
      <li
        className={classNames("flex w-full self-start gap-1", {
          "self-end": note.EntryUserID === user.userID,
        })}
        style={{ maxWidth: "fit-content" }}
      >
        <div
          className={classNames("flex-none", {
            "flex-order-1": note.EntryUserID === user.userID,
          })}
        ></div>
        <div
          className={classNames("flex-grow-1 px-3 py-2 rounded", {
            "flex-order-0": note.EntryUserID === user.userID,
          })}
          style={{ background: "#CDE1EC", color: "black" }}
        >
          <p className="p-0 m-0 text-sm font-semibold">~{note.FullName}</p>
          <p className="p-0 m-0" style={{ whiteSpace: "pre-line" }}>
            {note.Comment}
          </p>
        </div>
      </li>
    </>
  )
}
