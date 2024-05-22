import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  FormColumn,
  FormLabel,
  FormRow,
} from "../../components/LayoutComonents"
import {
  DatePickerField,
  TextAreaField,
  TextInputField,
} from "../../components"
import { ArrowRightLeft, Banknote } from "lucide-react"
import { Image } from "primereact/image"
import { TabMenu } from "primereact/tabmenu"
import MakerInformation from "./MakerInformation"
import { useParams, useSearchParams } from "react-router-dom"
import CustomerInformation from "./CustomerInformation"
import ReturnedChecks from "./ReturnedChecks"

const FORMS_KEYS = [
  "transactioninfo",
  "customerinfo",
  "makerinfo",
  "returnedchecks",
]

const CheckTransaction = () => {
  const { TransactionID } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const queryParams = new URLSearchParams(searchParams)
  const tab = queryParams.get("activeTab")

  const items = [
    {
      label: "Transaction Information",
      icon: "pi pi-dollar",
      command: () => {
        setSearchParams({ activeTab: FORMS_KEYS[0] })
      },
    },
    {
      label: "Customer Information",
      icon: "pi pi-chart-line",
      command: () => {
        setSearchParams({ activeTab: FORMS_KEYS[1] })
      },
    },
    {
      label: "Make Information",
      icon: "pi pi-list",
      command: () => {
        setSearchParams({ activeTab: FORMS_KEYS[2] })
      },
    },
    {
      label: "Returned Checks",
      icon: "pi pi-inbox",
      command: () => {
        setSearchParams({ activeTab: FORMS_KEYS[3] })
      },
    },
  ]

  function showSection() {
    switch (tab) {
      case FORMS_KEYS[0]:
        return <TransactionInformation />
      case FORMS_KEYS[1]:
        return <CustomerInformation />
      case FORMS_KEYS[2]:
        return <MakerInformation />
      case FORMS_KEYS[3]:
        return <ReturnedChecks />
      default:
        return <TransactionInformation />
    }
  }

  return (
    <div className="card">
      <TabMenu
        model={items}
        activeIndex={FORMS_KEYS.indexOf(tab)}
        style={{ overflowY: "hidden" }}
      />
      <div className="mt-2">{showSection()}</div>
    </div>
  )
}

export default CheckTransaction

// Tabs
function TransactionInformation() {
  const method = useForm({
    defaultValues: {
      Transaction_ID: "",
      Transaction_Date: new Date(),
      Store_ID: "",
      Store_Name: "",
      Routing_Number: "",
      Account_Number: "",
      Bank_Name: "",
      Check_Number: "",
      Check_Amount: 0,
      Fee_Percentage: null,
      Processing_Fee: 0,
      Loyalty_Card_Fee: 0,
      Transaction_Fee: 0,
      Amount_Paid: 0,
      Check_Type: null,
      CheckDate: new Date(),
      Check_Date: "",
      Processed_By_UserId: "",
      Processing_Status: "",
      Guarantee: null,
      Pending_Reason: "",
      Transaction_Notes: "",
    },
  })
  const shadow = "bg-white mb-3 rounded-xl"
  return (
    <>
      <form>
        <FormRow>
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className={`p-2 ${shadow} `} style={{ paddingBottom: "1rem" }}>
              <div className="flex gap-2 items-center">
                <ArrowRightLeft />
                <span className="text-xl font-semibold">
                  Transaction Information
                </span>
              </div>
              <hr className="my-1" />
              <FormRow className="">
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Transaction ID</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Transaction_ID"}
                      focusOptions={() => method.setFocus("Transaction_Date")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Transaction Date & Time</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name="Transaction_Date"
                      showTime={true}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store ID</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Store_ID"}
                      focusOptions={() => method.setFocus("Store_Name")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Store Name</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Store_Name"}
                      focusOptions={() => method.setFocus("Routing_Number")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Routing Number</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Routing_Number"}
                      focusOptions={() => method.setFocus("Account_Number")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Account Number</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Account_Number"}
                      focusOptions={() => method.setFocus("Bank_Name")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Bank Name</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Bank_Name"}
                      focusOptions={() => method.setFocus("Check_Number")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
              </FormRow>
            </div>

            {/* Check Information */}
            <div className={`p-2  ${shadow} `}>
              <div className="flex gap-2 items-center">
                <Banknote />
                <span className="text-xl font-semibold">Check Information</span>
              </div>

              <hr className="my-1" />
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Check Number</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Check_Number"}
                      focusOptions={() => method.setFocus("Check_Amount")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Check Amount</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Check_Amount"}
                      focusOptions={() => method.setFocus("Fee_Percentage")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <FormLabel>Fee %</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Fee_Percentage"}
                      focusOptions={() => method.setFocus("Processing_Fee")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <FormLabel>Fee Amount</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Processing_Fee"}
                      focusOptions={() =>
                        method.setFocus("TransactionDateTime")
                      }
                      readonly={true}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Card Replacement</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Loyalty_Card_Fee"}
                      focusOptions={() => method.setFocus("Transaction_Fee")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Transaction Fee</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Transaction_Fee"}
                      focusOptions={() => method.setFocus("Amount_Paid")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Amount Paid</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Amount_Paid"}
                      focusOptions={() =>
                        method.setFocus("TransactionDateTime")
                      }
                      readonly={true}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Check Type</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Loyalty_Card_Fee"}
                      focusOptions={() => method.setFocus("TransactionFee")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Check Date</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name={"Check_Date"}
                      focusOptions={() =>
                        method.setFocus("Processed_By_UserId")
                      }
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Processes By</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Processed_By_UserId"}
                      focusOptions={() => method.setFocus("Processing_Status")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Processing Status</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Processing_Status"}
                      focusOptions={() => method.setFocus("Guarantee")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Gurantee</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Guarantee"}
                      focusOptions={() => method.setFocus("Pending_Reason")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Pending Reason</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Pending_Reason"}
                      focusOptions={() => method.setFocus("Transaction_Notes")}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <FormLabel>Transaction Notes</FormLabel>
                  <div>
                    <TextAreaField
                      control={method.control}
                      name={"Transaction_Notes"}
                      rows={3}
                    />
                  </div>
                </FormColumn>
              </FormRow>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 xl:col-span-5">
            <div className={`p-2  ${shadow}`}>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <Image preview src="" />
                </FormColumn>
              </FormRow>
            </div>
            <div className={`p-2  ${shadow}`}>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <FormLabel></FormLabel>
                  <Image preview src="" />
                </FormColumn>
              </FormRow>
            </div>
            <div className={`p-2  ${shadow}`}>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <FormLabel>Pending Reasons</FormLabel>
                  <div>
                    <TextAreaField
                      control={method.control}
                      name={"Loyalty_Card_Fee"}
                      rows={6}
                      readonly={true}
                    />
                  </div>
                </FormColumn>
              </FormRow>
            </div>
          </div>
        </FormRow>
      </form>
    </>
  )
}
