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
import MakerInformationStyleTwo from "./MakerInformationStyleTwo"
import { useSearchParams } from "react-router-dom"
import CustomerInformation from "./CustomerInformation"
import ReturnedChecks from "./ReturnedChecks"

const FORMS_KEYS = [
  "transactioninfo",
  "customerinfo",
  "makerinfo",
  "returnedchecks",
]

const CheckTransaction = () => {
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
        return <MakerInformationStyleTwo />
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
      TransactionID: "",
      TransactionDateTime: new Date(),
      StoreID: "",
      StoreName: "",
      RoutingNumber: "",
      AccountNumber: "",
      BankName: "",
      CheckNumber: "",
      CheckAmount: 0,
      FeePercentage: null,
      FeeAmount: 0,
      CardReplacement: 0,
      TransactionFee: 0,
      AmountPaid: 0,
      CheckType: null,
      CheckDate: new Date(),
      ProcessedBy: "",
      ProcessingStatus: "",
      Guarantee: null,
      PendingReason: "",
      TransactionNotes: "",
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
                      name={"TransactionID"}
                      focusOptions={() =>
                        method.setFocus("TransactionDateTime")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Transaction Date & Time</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name="TransactionDateTime"
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
                      name={"StoreID"}
                      focusOptions={() => method.setFocus("StoreName")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Store Name</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"StoreName"}
                      focusOptions={() => method.setFocus("RoutingNumber")}
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
                      name={"RoutingNumber"}
                      focusOptions={() => method.setFocus("AccountNumber")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Account Number</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"AccountNumber"}
                      focusOptions={() => method.setFocus("BankName")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Bank Name</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"BankName"}
                      focusOptions={() =>
                        method.setFocus("TransactionDateTime")
                      }
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
                      name={"CheckNumber"}
                      focusOptions={() => method.setFocus("CheckAmount")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Check Amount</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"CheckAmount"}
                      focusOptions={() => method.setFocus("FeePercentage")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <FormLabel>Fee %</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"FeePercentage"}
                      focusOptions={() => method.setFocus("FeeAmount")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <FormLabel>Fee Amount</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"FeeAmount"}
                      focusOptions={() =>
                        method.setFocus("TransactionDateTime")
                      }
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
                      name={"CardReplacement"}
                      focusOptions={() => method.setFocus("TransactionFee")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Transaction Fee</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"TransactionFee"}
                      focusOptions={() => method.setFocus("AmountPaid")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Amount Paid</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"AmountPaid"}
                      focusOptions={() =>
                        method.setFocus("TransactionDateTime")
                      }
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
                      name={"CardReplacement"}
                      focusOptions={() => method.setFocus("TransactionFee")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Check Date</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name={"TransactionFee"}
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
                      name={"ProcessedBy"}
                      focusOptions={() => method.setFocus("ProcessingStatus")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Processing Status</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"ProcessingStatus"}
                      focusOptions={() => method.setFocus("Guarantee")}
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
                      focusOptions={() => method.setFocus("PendingReason")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Pending Reason</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"PendingReason"}
                      focusOptions={() => method.setFocus("TransactionNotes")}
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
                      name={"TransactionNotes"}
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
                      name={"CardReplacement"}
                      rows={6}
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
