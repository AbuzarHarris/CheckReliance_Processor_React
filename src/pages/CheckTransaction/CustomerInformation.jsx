import React, { useState, useEffect } from "react"
import { Galleria } from "primereact/galleria"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import {
  FormColumn,
  FormLabel,
  FormRow,
} from "../../components/LayoutComonents"
import {
  CheckBoxField,
  DatePickerField,
  TextInputField,
} from "../../components"
import Cheque from "../../assets/cheque.png"
import { Button } from "primereact/button"
import { useMakerNotesModalHook } from "../../hooks"
import { Image } from "primereact/image"
export default function CustomerInformation() {
  const method = useForm({
    defaultValues: {
      Customer_ID: "",
      IDType: null,
      Account_Status: "",
      Account_Status_Reason: "",
      First_Name: "",
      Last_Name: "",
      Middle_Initial: "",
      CommercialCustomer: "",
      DL_Number: "",
      DL_Expiration: new Date(),
      DL_State: "",
      Date_Of_Birth: new Date(),
      Phone: "",
      Customer_Processing_Fee: "",
      Company_Paperwork_Completed: false,
      CTR_Paperwork_Completed: false,
      Street_Address: "",
      Apt_Number: "",
      City: "",
      State: "",
      Zip: "",
      Enroll_Date: new Date(),
      Enroll_Store_Id: "",
      Enroll_Store_Name: "",
      Last_Modified_Date: new Date(),
      Last_Modified_Store_Id: "",
      Last_Modified_Store_Name: "",
    },
  })
  const shadow = "bg-white mb-3 rounded-xl"

  return (
    <>
      <form className="bg-white rounded shadow-xl">
        <FormRow className={`p-2 ${shadow}`}>
          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 `}
          >
            <FormRow className="my-2">
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <FormLabel>Customer ID:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Customer_ID"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                    readonly={true}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <FormLabel>ID Type:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"TransactionID"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                <FormLabel>Customer Status:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Account_Status"}
                    focusOptions={() =>
                      method.setFocus("Account_Status_Reason")
                    }
                    readonly={true}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-5 xl:col-span-5 md:col-span-12">
                <FormLabel>Status Reason:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Account_Status_Reason"}
                    focusOptions={() => method.setFocus("First_Name")}
                    readonly={true}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>First Name:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"First_Name"}
                    focusOptions={() => method.setFocus("Last_Name")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Last Name:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Last_Name"}
                    focusOptions={() => method.setFocus("Middle_Initial")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Middle Initial:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Middle_Initial"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow className="mt-4 mb-2">
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Commercial Customer (if any):</FormLabel>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                    readonly={true}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow className="mb-2">
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Driving License or ID#:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"DL_Number"}
                    focusOptions={() => method.setFocus("DL_Expiration")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Expiration Date:</FormLabel>
                <div>
                  <DatePickerField
                    control={method.control}
                    name={"DL_Expiration"}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>State:</FormLabel>
                <div>
                  <TextInputField control={method.control} name={"DL_State"} />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Date Of Birth:</FormLabel>
                <div>
                  <DatePickerField
                    control={method.control}
                    name={"Date_Of_Birth"}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Phone Number:</FormLabel>
                <div>
                  <TextInputField control={method.control} name={"Phone"} />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Personal Check Fee:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Customer_Processing_Fee"}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow className="mt-4 mb-2">
              <FormColumn className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12">
                <div>
                  <CheckBoxField
                    control={method.control}
                    name={"Company_Paperwork_Completed"}
                    label={"Company Paper Work Completed:"}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12">
                <div>
                  <CheckBoxField
                    control={method.control}
                    name={"CTR_Paperwork_Completed"}
                    label={"CTR Paperwork Completed:"}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                <FormLabel>Street Address:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Street_Address"}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>APT #:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Apt_Number"}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow className="my-2">
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>City:</FormLabel>
                <div>
                  <TextInputField control={method.control} name={"City"} />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>State:</FormLabel>
                <div>
                  <TextInputField control={method.control} name={"State"} />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Zip:</FormLabel>
                <div>
                  <TextInputField control={method.control} name={"Zip"} />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow className="my-2">
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Enrollment Date:</FormLabel>
                <div>
                  <DatePickerField
                    control={method.control}
                    name={"Enroll_Date"}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store ID:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Enroll_Store_Id"}
                    focusOptions={() => method.setFocus("Enroll_Store_Name")}
                    readonly={true}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store Name:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Enroll_Store_Name"}
                    focusOptions={() => method.setFocus("Last_Modified_Date")}
                    readonly={true}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow className="my-2">
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Last Modified:</FormLabel>
                <div>
                  <DatePickerField
                    control={method.control}
                    name={"Last_Modified_Date"}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store ID:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Last_Modified_Store_Id"}
                    focusOptions={() =>
                      method.setFocus("Last_Modified_Store_Name")
                    }
                    readonly={true}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store Name:</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"Last_Modified_Store_Name"}
                    focusOptions={() =>
                      method.setFocus("Last_Modified_Store_Name")
                    }
                    readonly={true}
                  />
                </div>
              </FormColumn>
            </FormRow>
          </div>
          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6`}
          >
            <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
              <FormLabel>Customer Photos</FormLabel>
              <ImagesGallery />
            </FormColumn>
            <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
              <FormLabel>Customer ID Cards</FormLabel>
              <ImagesGallery />
            </FormColumn>
          </div>
        </FormRow>
        <div className="p-2 w-full flex gap-2 items-center justify-center flex-wrap">
          <Button type="button" label="UPDATE CUSTOMER INFO" severity="info" />
          <Button
            type="button"
            label="VIEW CUSTOMER TRANSACTION"
            severity="info"
          />
          <Button type="button" label="VIEW NOTES BY STORE" severity="info" />
          <FormProvider {...method}>
            <MakerModalCompoent />
          </FormProvider>
        </div>
      </form>
    </>
  )
}

const MakerModalCompoent = () => {
  const method = useFormContext()

  const { setVisible, render } = useMakerNotesModalHook()

  return (
    <>
      <Button
        label="Customer Notes"
        text
        severity="info"
        type="button"
        onClick={() => setVisible(true)}
      />
      <FormProvider {...method}>{render}</FormProvider>
    </>
  )
}

export function ImagesGallery() {
  const [images, setImages] = useState([
    {
      itemImageSrc: Cheque,
      thumbnailImageSrc: Cheque,
      alt: "Description for Image 1",
      title: "Title 1",
      scanDate: "13-Apr-2034",
    },
    {
      itemImageSrc: Cheque,
      thumbnailImageSrc: Cheque,
      alt: "Description for Image 1",
      title: "Title 1",
      scanDate: "13-Apr-2034",
    },
    {
      itemImageSrc: Cheque,
      thumbnailImageSrc: Cheque,
      alt: "Description for Image 1",
      title: "Title 1",
      scanDate: "13-Apr-2034",
    },
  ])
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ]

  const itemTemplate = (item) => {
    return (
      <Image
        preview
        src={item.itemImageSrc}
        alt={item.alt}
        pt={{
          image: {
            style: {
              width: "100%",
            },
          },
        }}
        style={{ width: "100%", display: "block" }}
      />
    )
  }

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    )
  }

  const caption = (item) => {
    return (
      <React.Fragment>
        <p className="text-white p-0 m-0">Scan Date: {item.scanDate}</p>
      </React.Fragment>
    )
  }

  return (
    <div className="card">
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        caption={caption}
        pt={{
          caption: {
            style: {
              padding: "0 10px",
            },
          },
        }}
        style={{ maxWidth: "640px" }}
      />
    </div>
  )
}
