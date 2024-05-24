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
  TextAreaField,
  TextInputField,
} from "../../components"
import { Button } from "primereact/button"
import { useMakerNotesModalHook } from "../../hooks"
import { Image } from "primereact/image"
export default function CustomerInformation({
  customerInformationData,
  customerImagesData,
  customerIdCardsImagesData,
}) {
  const method = useForm({
    defaultValues: {
      Customer_ID: customerInformationData.Customer_ID,
      IDType: customerInformationData.Customer_ID,
      Account_Status: customerInformationData.Account_Status,
      Account_Status_Reason: customerInformationData.Account_Status_Reason,
      First_Name: customerInformationData.First_Name,
      Last_Name: customerInformationData.Last_Name,
      Middle_Initial: customerInformationData.Middle_Initial,
      CommercialCustomer: customerInformationData.First_Name,
      DL_Number: customerInformationData.DL_Number,
      DL_Expiration: new Date(customerInformationData.DL_Expiration),
      DL_State: customerInformationData.DL_State,
      Date_Of_Birth: new Date(customerInformationData.Date_Of_Birth),
      Phone: customerInformationData.Phone,
      Customer_Processing_Fee: customerInformationData.Customer_Processing_Fee,
      Company_Paperwork_Completed:
        customerInformationData.Company_Paperwork_Completed === "Y",
      CTR_Paperwork_Completed: customerInformationData.First_Name === "Y",
      Street_Address: customerInformationData.Street_Address,
      Apt_Number: customerInformationData.Apt_Number,
      City: customerInformationData.City,
      State: customerInformationData.State,
      Zip: customerInformationData.Zip,
      Enroll_Date: new Date(customerInformationData.Enroll_Date),
      Enroll_Store_Id: customerInformationData.Enroll_Store_Id,
      Enroll_Store_Name: customerInformationData.Enroll_Store_Name,
      Last_Modified_Date: new Date(customerInformationData.Last_Modified_Date),
      Last_Modified_Store_Id: customerInformationData.Last_Modified_Store_Id,
      Last_Modified_Store_Name:
        customerInformationData.Last_Modified_Store_Name,
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
              <div
                className={`col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12 p-2  ${shadow}`}
              >
                <FormRow className="gap-1">
                  <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                    <div className="flex items-center justify-end self-center">
                      <p className="p-0 m-0 mr-10">
                        Maker Notes by Check Reliance
                      </p>
                      <Button
                        severity="success"
                        label="ADD NOTE (CR)"
                        pt={{
                          root: {
                            className: "px-2 py-1",
                          },
                        }}
                      />
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                    <FormLabel></FormLabel>
                    <div>
                      <TextAreaField
                        control={method.control}
                        name={"BankName"}
                        rows={4}
                      />
                    </div>
                  </FormColumn>
                </FormRow>
              </div>
            </FormRow>
          </div>
          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6`}
          >
            <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
              <FormLabel>Customer Photos</FormLabel>
              {/* <ImagesGallery imageData={customerImagesData} /> */}
              <div className="flex items-center justify-between flex-col lg:flex-row xl:flex-row w-full gap-1">
                <CustomerAndIDCardImage
                  src={customerImagesData[0]?.Photo_Image}
                  showScanLabel={false}
                />
                <CustomerAndIDCardImage
                  src={customerImagesData[1]?.Photo_Image}
                  showScanLabel={false}
                />
              </div>
            </FormColumn>
            <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
              <FormLabel>Customer ID Cards</FormLabel>
              {/* <ImagesGallery imageData={customerIdCardsImagesData} /> */}
              <div className="flex items-center justify-between gap-2 flex-col lg:flex-row xl:flex-row w-full ">
                <CustomerAndIDCardImage
                  src={customerIdCardsImagesData[0]?.IDCard_Image}
                  scanDate={customerIdCardsImagesData[0]?.Scan_Date}
                />
                <CustomerAndIDCardImage
                  src={customerIdCardsImagesData[1]?.IDCard_Image}
                  scanDate={customerIdCardsImagesData[1]?.Scan_Date}
                />
              </div>
              <div className="flex items-center justify-between flex-col lg:flex-row xl:flex-row w-full gap-2">
                <CustomerAndIDCardImage
                  src={customerIdCardsImagesData[2]?.IDCard_Image}
                  scanDate={customerIdCardsImagesData[2]?.Scan_Date}
                />
                <CustomerAndIDCardImage
                  src={customerIdCardsImagesData[3]?.IDCard_Image}
                  scanDate={customerIdCardsImagesData[3]?.Scan_Date}
                />
              </div>
              <div className="flex items-center justify-between flex-col lg:flex-row xl:flex-row w-full gap-2">
                <CustomerAndIDCardImage
                  src={customerIdCardsImagesData[4]?.IDCard_Image}
                  scanDate={customerIdCardsImagesData[4]?.Scan_Date}
                />
                <CustomerAndIDCardImage
                  src={customerIdCardsImagesData[5]?.IDCard_Image}
                  scanDate={customerIdCardsImagesData[5]?.Scan_Date}
                />
              </div>
            </FormColumn>
            <div className="w-full flex gap-2 items-center justify-center flex-col lg:flex-row xl:flex-row">
              <Button
                type="button"
                label="UPDATE CUSTOMER INFO"
                severity="info"
                className="flex-1 w-full lg:w-0 xl:w-0"
              />
              <Button
                type="button"
                label="VIEW CUSTOMER TRANSACTION"
                severity="info"
                className="flex-1 w-full lg:w-0 xl:w-0"
              />
              <Button
                type="button"
                label="VIEW NOTES BY STORE"
                severity="info"
                className="flex-1 w-full lg:w-0 xl:w-0"
              />
            </div>
          </div>
        </FormRow>
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

export function ImagesGallery({ imageData }) {
  const [images, setImages] = useState(imageData)
  const [activeIndex, setActiveIndex] = useState(0)
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
        src={"data:image/jpeg;base64," + item.itemImageSrc}
        alt={item.alt}
        pt={{
          image: {
            style: {
              width: "100%",
              maxHeight: "200px",
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
        src={"data:image/jpeg;base64," + item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block", width: "100px", height: "50px" }}
      />
    )
  }

  const caption = (item) => {
    return (
      <React.Fragment>
        <p className="text-white p-0 m-0">Scan Date: {item.Scan_Date}</p>
      </React.Fragment>
    )
  }

  return (
    <div className="card">
      <Galleria
        value={images}
        activeIndex={activeIndex}
        onItemChange={(e) => {
          setActiveIndex(e.index)
        }}
        showThumbnails={true}
        responsiveOptions={responsiveOptions}
        numVisible={3}
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

function CustomerAndIDCardImage({ scanDate, src, showScanLabel = true }) {
  return (
    <>
      <div
        className={`flex-1 flex flex-col flex-wrap p-1 min-h-[10rem] w-full lg:w-0 xl:w-0`}
      >
        <div className={`flex-1 ${src === undefined ? " bg-gray-100" : ""} `}>
          {src !== undefined && (
            <>
              <Image
                preview
                src={"data:image/jpeg;base64," + src}
                pt={{
                  image: {
                    style: {
                      height: "160px",
                      width: "450px",
                    },
                  },
                }}
                alt="Customer ID Photo 1"
              />
            </>
          )}
        </div>
        {showScanLabel && (
          <>
            <span className="text-md">Scan Date: {scanDate}</span>
          </>
        )}
      </div>
    </>
  )
}
