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
import { Button } from "primereact/button"
import { Check_Transaction_data } from "../../api/CheckTransactionApi"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEY } from "../../utils/enums"
import { useAuthProvider } from "../../context/AuthContext"

const FORMS_KEYS = [
  "transactioninfo",
  "customerinfo",
  "makerinfo",
  "returnedchecks",
]

const CheckTransaction = () => {
  const { TransactionID } = useParams()
  const { user } = useAuthProvider()
  const [searchParams, setSearchParams] = useSearchParams()
  const queryParams = new URLSearchParams(searchParams)
  const tab = queryParams.get("activeTab")
  const {
    data: data,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [QUERY_KEY.CHECK_TRANSACTION_DATA, TransactionID],
    queryFn: () =>
      Check_Transaction_data({
        UserId: "ifty",
        TransactionID: TransactionID,
      }),
    enabled: user != null,
    refetchOnWindowFocus: false,
    retry: false,
  })
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
      label: "Maker Information",
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
        console.log(data.transactiondata, "rendered")
        return (
          <>
            {data.transactiondata ? (
              <TransactionInformation transactiondata={data?.transactiondata} />
            ) : null}
          </>
        )
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
        style={{ overflowY: "hidden", padding: "1px" }}
        pt={{
          action: {
            style: {
              paddingTop: "8px",
              paddingBottom: "8px",
            },
          },
        }}
      />
      {isLoading || isFetching ? (
        <h1>Loading</h1>
      ) : (
        <div className="">{data ? showSection() : null}</div>
      )}
    </div>
  )
}

export default CheckTransaction

// Tabs
function TransactionInformation({ transactiondata }) {
  const method = useForm({
    defaultValues: {
      Transaction_ID: transactiondata?.Transaction_ID,
      Transaction_Date: transactiondata?.Transaction_Date,
      Store_ID: transactiondata?.Store_ID,
      Store_Name: transactiondata?.Store_Name,
      Routing_Number: transactiondata?.Routing_Number,
      Account_Number: transactiondata?.Account_Number,
      Bank_Name: transactiondata?.Bank_Name,
      Check_Number: transactiondata?.Check_Number,
      Check_Amount: transactiondata?.Check_Amount,
      Fee_Percentage: transactiondata?.Fee_Percentage,
      Processing_Fee: transactiondata?.Processing_Fee,
      Loyalty_Card_Fee: transactiondata?.Loyalty_Card_Fee,
      Transaction_Fee: transactiondata?.Transaction_Fee,
      Amount_Paid: transactiondata?.Amount_Paid,
      Check_Type: transactiondata?.Check_Type,
      Check_Date: new Date(transactiondata?.Check_Date),
      Processed_By_UserId: transactiondata?.Processed_By_UserId,
      Processing_Status: transactiondata?.Processing_Status,
      Guarantee: transactiondata?.Guarantee,
      Pending_Reason: transactiondata?.Pending_Reason,
      Transaction_Notes: transactiondata?.Transaction_Notes,
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
                    <TextInputField
                      control={method.control}
                      focusOptions={() => method.setFocus("Store_ID")}
                      name="Transaction_Date"
                      readonly={true}
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
                      focusOptions={() => method.setFocus("Loyalty_Card_Fee")}
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
              <div className={`p-2 flex items-center gap-2`}>
                <Button
                  className="flex-1"
                  type="button"
                  label="UPDATE TRANSACTION INFO"
                  severity="success"
                />
                <Button
                  className="flex-1"
                  type="button"
                  label="SAVE TRANSACTION NOTES"
                  severity="secondary"
                />
              </div>
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
