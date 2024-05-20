import React from "react"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import {
  FormColumn,
  FormLabel,
  FormRow,
} from "../../components/LayoutComonents"
import {
  DatePickerField,
  DropdownField,
  TextAreaField,
  TextInputField,
} from "../../components"
import { ArrowRightLeft, Banknote } from "lucide-react"
import { Image } from "primereact/image"
import Cheque from "../../assets/cheque.png"
import { Button } from "primereact/button"
import { SplitButton } from "primereact/splitbutton"
import { ButtonGroup } from "primereact/buttongroup"
import Toolbar from "../../components/Toolbar"
import { Carousel } from "primereact/carousel"
import { useMakerNotesModalHook } from "../../hooks"
export default function MakerInformationStyleTwo() {
  const method = useForm({
    defaultValues: {
      MakerID: "",
      AccountStatus: "",
      CheckType: null,
      CompanyStatus: null,
      StoreManager: "",
      RoutingNumber: "",
      AccountNumber: "",
      BankName: "",
      MakerName: "",
      DBAName: "",
      MakerWeeklyLimit: "",
      AddressType: null,
      PersonalCheckFee: "",
      SreetAddress: "",
      City: "",
      State: null,
      ZIP: "",
      OwnerFirstName: "",
      OwnerLastName: "",
      OwnerPhonenumber: "",
      SecondaryFirstName: "",
      SecondaryLastName: "",
      SecondaryPhoneNumber: "",
      EnrollmentDate: new Date(),
      StoreID: 0,
      StoreName: "",
      LastTransactionDate: "",
      StoreID2: 0,
      StoreName2: "",
      LastVerifiedDate: new Date(),
      LastVerifiedBy: "",
      EntityCreationDate: new Date(),
      TotalApprovedChecks: 0,
      TotalDeclinedChecks: 0,
      TotalReturnedCR: 0,
      TotalRetrunedStore: 0,
      TotalResolvedCR: 0,
      TotalApprovedChecksAmount: 0,
      TotalDeclinedChecksAmount: 0,
      TotalReturnedCRAmount: 0,
      TotalRetrunedStoreAmount: 0,
      TotalResolvedCRAmount: 0,
    },
  })
  const shadow = "bg-white mb-3 rounded-xl"

  return (
    <>
      <form>
        <FormRow className={`p-2 ${shadow}`}>
          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 `}
          >
            <FormRow className="">
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <FormLabel>Transaction ID</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"TransactionID"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Account Status</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"TransactionID"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12">
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
                <FormLabel>Check Type</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"RoutingNumber"}
                    focusOptions={() => method.setFocus("AccountNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Company Status</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store Manager</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
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
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                <FormLabel>Maker Name</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"StoreName"}
                    focusOptions={() => method.setFocus("RoutingNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>DBA Name</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"StoreID"}
                    focusOptions={() => method.setFocus("StoreName")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Maker Weekly Limit</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"RoutingNumber"}
                    focusOptions={() => method.setFocus("AccountNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Address Type</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Personal Check Fee</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                <FormLabel>Street Address</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"CardReplacement"}
                  />
                </div>
              </FormColumn>
            </FormRow>

            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                <FormLabel>Decline Reason</FormLabel>
                <div>
                  {/* <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  /> */}
                  <DropdownField
                    control={method.control}
                    name={"DeclineReason"}
                    options={[
                      { label: "Reason 1", value: 1 },
                      { label: "Reason 2", value: 2 },
                    ]}
                    filter={true}
                  />
                </div>
              </FormColumn>
            </FormRow>
          </div>
          <div
            className={`col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6`}
          >
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>City</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"RoutingNumber"}
                    focusOptions={() => method.setFocus("AccountNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>State</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>ZIP</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Owner Firstname</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"RoutingNumber"}
                    focusOptions={() => method.setFocus("AccountNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Owner Lastname</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Owner Phone Number</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Secondary Firstname</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"RoutingNumber"}
                    focusOptions={() => method.setFocus("AccountNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Secondary Lastname</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Secondary Phone Number</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Enrollment Date</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"RoutingNumber"}
                    focusOptions={() => method.setFocus("AccountNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store ID</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store Name</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Last Transaction Date</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"RoutingNumber"}
                    focusOptions={() => method.setFocus("AccountNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store ID</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Store Name</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Last Verified Date</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"RoutingNumber"}
                    focusOptions={() => method.setFocus("AccountNumber")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Last Verified By</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"AccountNumber"}
                    focusOptions={() => method.setFocus("BankName")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                <FormLabel>Entity Creation Date</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow className="mb-2 items-end">
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <FormLabel>Total # Checks</FormLabel>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                <FormLabel>Approved</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                <FormLabel>Declined</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                <FormLabel>Returned CR</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                <FormLabel>Reutrned Store</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                <FormLabel>Resolved CR</FormLabel>
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
            <FormRow>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <FormLabel>Total Amount</FormLabel>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
              <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                <div>
                  <TextInputField
                    control={method.control}
                    name={"BankName"}
                    focusOptions={() => method.setFocus("TransactionDateTime")}
                  />
                </div>
              </FormColumn>
            </FormRow>
          </div>
          {/* <div
            className={`col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-6 `}
          >
         
          </div> */}
        </FormRow>
        {/* Check Information */}

        {/* <div className={`p-2  ${shadow}`}>
          <FormRow className="gap-1">
            <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
              <div className="flex items-center justify-end self-center">
                <p className="p-0 m-0 mr-10">Maker Notes by Check Reliance</p>
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
        </div> */}
        <FormRow>
          <FormColumn className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12">
            <div className={`p-2  ${shadow}`}>
              <FormRow className="gap-0">
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <div className="flex items-center gap-5">
                    <div className="flex flex-col gap-2">
                      <Button
                        label="Front"
                        severity="secondary"
                        type="button"
                      />
                      <Button label="Back" severity="secondary" type="button" />
                    </div>
                    <div>
                      <Image src={Cheque} preview />
                    </div>
                  </div>
                </FormColumn>
              </FormRow>
            </div>
          </FormColumn>
          <FormColumn className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12">
            <div className={`p-2  ${shadow}`}>
              <FormRow className="gap-1">
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <div className="flex items-center justify-center">
                    <p className="p-0 m-0 mr-10">Pending Reasons</p>
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
          </FormColumn>
        </FormRow>
        <div className="bg-white rounded-md p-2 flex gap-2 items-center flex-wrap">
          <Button type="button" label="Approve" severity="success" />
          <Button type="button" label="Decline" severity="danger" />
          <Button type="button" label="Hold" severity="warning" />
          <Button type="button" label="Release" severity="secondary" />
          <Button type="button" label="Send For Review" severity="help" />
          <Button type="button" label="View Notes By Store" severity="info" />
          <Button
            type="button"
            label="View Maker Transactions"
            severity="info"
          />
          <Button type="button" label="Update Maker" severity="info" />
          <Button type="button" label="Matched Maker" severity="info" />
          <Button type="button" label="Matched Customer" severity="info" />
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
        label="Comments"
        text
        severity="info"
        type="button"
        onClick={() => setVisible(true)}
      />
      <FormProvider {...method}>{render}</FormProvider>
    </>
  )
}

const ButtonGroups = () => {
  return (
    <div className="flex items-center">
      <Button label="Save" icon="pi pi-check" />
      <Button label="Delete" icon="pi pi-trash" />
      <Button label="Cancel" icon="pi pi-times" />
    </div>
  )
}

const SplitButtons = () => {
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
    },
  ]

  return (
    <div className="card flex justify-content-center flex-wrap">
      <SplitButton label="Save" icon="pi pi-plus" model={items} />
    </div>
  )
}
