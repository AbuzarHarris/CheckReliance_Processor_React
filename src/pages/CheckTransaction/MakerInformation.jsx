import React from "react"
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
import Cheque from "../../assets/cheque.png"
import { Button } from "primereact/button"
import { SplitButton } from "primereact/splitbutton"
export default function MakerInformation() {
  const method = useForm({
    defaultValues: {
      maker_Id: "",
      AccountStatus: "",
      StatusReason: null,
      check_Type: null,
      company_Status: "",
      StoreManager: "",
      routing_Number: "",
      account_Number: "",
      bank_Name: "",
      maker_Name: "",
      dbA_Name: "",
      weekly_Limit: "",
      address_Type: null,
      maker_Processing_Fee: "",
      street_Address: "",
      city: "",
      state: null,
      zip: "",
      owner_First_Name: "",
      owner_Last_Name: "",
      owner_Phone: "",
      secondary_First_Name: "",
      secondary_Last_Name: "",
      secondary_Phone: "",
      enroll_Date: new Date(),
      enroll_Store_Id: 0,
      enroll_Store_Name: "",
      last_Transaction_Date: "",
      last_Transaction_Store_Id: 0,
      last_Transaction_Store_Name: "",
      verification_Date: new Date(),
      verified_By_UserId: "",
      EntityCreationDate: new Date(),
      total_Approved_No: 0,
      total_Approved_Amount: 0,
      total_Declined_No: 0,
      total_Declined_Amount: 0,
      total_Returned_No: 0,
      total_Returned_Amount: 0,
      total_Returned_By_Store_No: 0,
      total_Returned_By_Store_Amount: 0,
      total_Resolved_No: 0,
      total_Resolved_Amount: 0,
    },
  })
  const shadow = "bg-white mb-1 rounded-xl"
  return (
    <>
      <form>
        <FormRow className="gap-0">
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className={`p-2 ${shadow}`}>
              <FormRow className="">
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <FormLabel>Maker ID:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"maker_Id"}
                      focusOptions={() => method.setFocus("company_Status")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Account Status:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"AccountStatus"}
                      focusOptions={() => method.setFocus("StatusReason")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12">
                  <FormLabel>Status Reason:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"StatusReason"}
                      focusOptions={() => method.setFocus("check_Type")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Check Type:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"check_Type"}
                      focusOptions={() => method.setFocus("company_Status")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Company Status:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"company_Status"}
                      focusOptions={() => method.setFocus("StoreManager")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store Manager:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"StoreManager"}
                      focusOptions={() => method.setFocus("routing_Number")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Routing Number:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"routing_Number"}
                      focusOptions={() => method.setFocus("account_Number")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Account Number:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"account_Number"}
                      focusOptions={() => method.setFocus("bank_Name")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Bank Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"bank_Name"}
                      focusOptions={() => method.setFocus("maker_Name")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-8 xl:col-span-8 md:col-span-12">
                  <FormLabel>Maker Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"maker_Name"}
                      focusOptions={() => method.setFocus("dbA_Name")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>DBA Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"dbA_Name"}
                      focusOptions={() => method.setFocus("weekly_Limit")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Maker Weekly Limit:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"weekly_Limit"}
                      focusOptions={() => method.setFocus("address_Type")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Address Type:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"address_Type"}
                      focusOptions={() =>
                        method.setFocus("maker_Processing_Fee")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Personal Check Fee:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"maker_Processing_Fee"}
                      focusOptions={() => method.setFocus("street_Address")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <FormLabel>Street Address:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"street_Address"}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>City:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"city"}
                      focusOptions={() => method.setFocus("state")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>State:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"state"}
                      focusOptions={() => method.setFocus("zip")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>ZIP:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"zip"}
                      focusOptions={() => method.setFocus("owner_First_Name")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Owner First Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"owner_First_Name"}
                      focusOptions={() => method.setFocus("owner_Last_Name")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Owner Last Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"owner_Last_Name"}
                      focusOptions={() => method.setFocus("owner_Phone")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Owner Phone Number:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"owner_Phone"}
                      focusOptions={() =>
                        method.setFocus("secondary_First_Name")
                      }
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Secondary First Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"secondary_First_Name"}
                      focusOptions={() =>
                        method.setFocus("secondary_Last_Name")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Secondary Last Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"secondary_Last_Name"}
                      focusOptions={() => method.setFocus("secondary_Phone")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Secondary Phone Number:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"secondary_Phone"}
                      focusOptions={() => method.setFocus("enroll_Date")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Enrollment Date:</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name="enroll_Date"
                      showTime={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store ID:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"enroll_Store_Id"}
                      focusOptions={() => method.setFocus("enroll_Store_Name")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"enroll_Store_Name"}
                      focusOptions={() =>
                        method.setFocus("last_Transaction_Date")
                      }
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Last Transaction Date:</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name="last_Transaction_Date"
                      showTime={true}
                      focusOptions={() =>
                        method.setFocus("last_Transaction_Store_Id")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store ID:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"last_Transaction_Store_Id"}
                      focusOptions={() =>
                        method.setFocus("last_Transaction_Store_Name")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"last_Transaction_Store_Name"}
                      focusOptions={() => method.setFocus("verification_Date")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Last Verified Date:</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name="verification_Date"
                      showTime={true}
                      focusOptions={() => method.setFocus("verified_By_UserId")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Last Verified By:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"verified_By_UserId"}
                      focusOptions={() => method.setFocus("BankName")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Entity Creation Date:</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name="EntityCreationDate"
                      focusOptions={() => method.setFocus("total_Approved_No")}
                    />
                  </div>
                </FormColumn>
              </FormRow>
            </div>

            {/* Check Information */}
            <div className={`p-2  ${shadow}  `}>
              <FormRow className="mb-2 items-end">
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <FormLabel>Total # Checks</FormLabel>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Approved</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Approved_No"}
                      focusOptions={() => method.setFocus("total_Declined_No")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Declined</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Declined_No"}
                      focusOptions={() => method.setFocus("total_Returned_No")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Returned CR</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Returned_No"}
                      focusOptions={() =>
                        method.setFocus("total_Returned_By_Store_No")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Reutrned Store</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Returned_By_Store_No"}
                      focusOptions={() => method.setFocus("total_Resolved_No")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Resolved CR</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Resolved_No"}
                      focusOptions={() =>
                        method.setFocus("total_Approved_Amount")
                      }
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
                      name={"total_Approved_Amount"}
                      focusOptions={() =>
                        method.setFocus("total_Declined_Amount")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Declined_Amount"}
                      focusOptions={() =>
                        method.setFocus("total_Returned_Amount")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Returned_Amount"}
                      focusOptions={() =>
                        method.setFocus("total_Returned_By_Store_Amount")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Returned_By_Store_Amount"}
                      focusOptions={() =>
                        method.setFocus("total_Resolved_Amount")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"total_Resolved_Amount"}
                      focusOptions={() =>
                        method.setFocus("total_Resolved_Amount")
                      }
                    />
                  </div>
                </FormColumn>
              </FormRow>
            </div>
          </div>
          {/* Second Col */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 ">
            <div className={`p-2  ${shadow}`}>
              <FormRow className="gap-0">
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <Image src={Cheque} preview />
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12 text-center">
                  <div className="flex items-center w-full justify-center gap-2">
                    <Button
                      label="Front"
                      type="button"
                      severity="secondary"
                      pt={{
                        root: {
                          className: "px-2 py-1",
                        },
                      }}
                    />
                    <Button
                      label="Back"
                      type="button"
                      severity="secondary"
                      pt={{
                        root: {
                          className: "px-2 py-1",
                        },
                      }}
                    />
                  </div>
                </FormColumn>
              </FormRow>
            </div>
            <div className={`p-2  ${shadow}`}>
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
            <div className={`p-2  ${shadow}`}>
              <FormRow className="gap-1">
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <div className="flex items-center justify-center">
                    <p className="p-0 m-0 mr-10">Decline Reason</p>
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                  <FormLabel></FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"BankName"}
                    />
                  </div>
                </FormColumn>
              </FormRow>
            </div>
            <div className={`p-2 flex items-center gap-2`}>
              <Button
                className="flex-1"
                type="button"
                label="UPDATE MAKER"
                severity="secondary"
              />
              <Button
                className="flex-1"
                type="button"
                label="MATCHED MAKER"
                severity="info"
              />
              <Button
                className="flex-1"
                type="button"
                label="MATCHED CUSTOMER"
                severity="info"
              />
            </div>
          </div>
        </FormRow>
        <div className="bg-white rounded-md flex gap-2 items-center flex-wrap">
          <Button
            className="flex-1"
            type="button"
            label="APPROVE"
            severity="success"
          />
          <Button
            className="flex-1"
            type="button"
            label="DECLINE"
            severity="danger"
          />
          <Button
            className="flex-1"
            type="button"
            label="HOLD"
            severity="warning"
          />
          <Button
            className="flex-1"
            type="button"
            label="RELEASE"
            severity="secondary"
          />
          <Button
            className="flex-1"
            type="button"
            label="SEND FOR REVIEW"
            severity="help"
          />
          <Button
            className="flex-1"
            type="button"
            label="VIEW NOTES BY STORE"
            severity="info"
          />
          <Button
            className="flex-1"
            type="button"
            label="VIEW MAKE TRANSACTION"
            severity="info"
          />
        </div>
      </form>
    </>
  )
}
