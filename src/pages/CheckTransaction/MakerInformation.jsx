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
import { Image } from "primereact/image"
import Cheque from "../../assets/cheque.png"
import { Button } from "primereact/button"
export default function MakerInformation({ makerInformationData }) {
  console.log(makerInformationData)
  const method = useForm({
    defaultValues: {
      Maker_Id: makerInformationData?.Maker_Id,
      Account_Status: makerInformationData?.Account_Status,
      Account_Status_Reason: makerInformationData?.Account_Status_Reason,
      Check_Type: makerInformationData?.Check_Type,
      Company_Status: makerInformationData?.Company_Status,
      StoreManager: makerInformationData?.Maker_Id,
      Routing_Number: makerInformationData?.Routing_Number,
      Account_Number: makerInformationData?.Account_Number,
      Bank_Name: makerInformationData?.Bank_Name,
      Maker_Name: makerInformationData?.Maker_Name,
      DBA_Name: makerInformationData?.DBA_Name,
      Weekly_Limit: makerInformationData?.Weekly_Limit,
      Address_Type: makerInformationData?.Address_Type,
      Maker_Processing_Fee: makerInformationData?.Maker_Processing_Fee,
      Street_Address: makerInformationData?.Street_Address,
      City: makerInformationData?.City,
      State: makerInformationData?.State,
      Zip: makerInformationData?.Zip,
      Owner_First_Name: makerInformationData?.Owner_First_Name,
      Owner_Last_Name: makerInformationData?.Owner_First_Name,
      Owner_Phone: makerInformationData?.Owner_Phone,
      Secondary_First_Name: makerInformationData?.Secondary_First_Name,
      Secondary_Last_Name: makerInformationData?.Secondary_Last_Name,
      Secondary_Phone: makerInformationData?.Secondary_Phone,
      Enroll_Date: new Date(makerInformationData?.Enroll_Date),
      Enroll_Store_Id: makerInformationData?.Enroll_Store_Id,
      Enroll_Store_Name: makerInformationData?.Enroll_Store_Name,
      Last_Transaction_Date: new Date(
        makerInformationData?.Last_Transaction_Date
      ),
      Last_Transaction_Store_Id:
        makerInformationData?.Last_Transaction_Store_Id,
      Last_Transaction_Store_Name:
        makerInformationData?.Last_Transaction_Store_Name,
      Verification_Date: new Date(makerInformationData?.Maker_Id),
      Verified_By_UserId: makerInformationData?.Maker_Id,
      Entity_Creation_Date: new Date(
        makerInformationData?.Entity_Creation_Date
      ),
      Total_Approved_No: makerInformationData?.Total_Approved_No,
      Total_Approved_Amount: makerInformationData?.Total_Approved_Amount,
      Total_Declined_No: makerInformationData?.Total_Declined_No,
      Total_Declined_Amount: makerInformationData?.Total_Declined_Amount,
      Total_Returned_No: makerInformationData?.Total_Returned_No,
      Total_Returned_Amount: makerInformationData?.Total_Returned_Amount,
      Total_Returned_By_Store_No:
        makerInformationData?.Total_Returned_By_Store_No,
      Total_Returned_By_Store_Amount:
        makerInformationData?.Total_Returned_By_Store_Amount,
      Total_Resolved_No: makerInformationData?.Total_Resolved_No,
      Total_Resolved_Amount: makerInformationData?.Total_Resolved_Amount,
      Pending_Reason: makerInformationData?.Pending_Reason,
      Pending_Decline_Reasons: makerInformationData?.Pending_Decline_Reasons,
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
                      name={"Maker_Id"}
                      focusOptions={() => method.setFocus("Account_Status")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Account Status:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Account_Status"}
                      focusOptions={() =>
                        method.setFocus("Account_Status_Reason")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-6 xl:col-span-6 md:col-span-12">
                  <FormLabel>Status Reason:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Account_Status_Reason"}
                      focusOptions={() => method.setFocus("Check_Type")}
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
                      name={"Check_Type"}
                      focusOptions={() => method.setFocus("Company_Status")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Company Status:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Company_Status"}
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
                      focusOptions={() => method.setFocus("Routing_Number")}
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
                      name={"Routing_Number"}
                      focusOptions={() => method.setFocus("Account_Number")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Account Number:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Account_Number"}
                      focusOptions={() => method.setFocus("Bank_Name")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Bank Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Bank_Name"}
                      focusOptions={() => method.setFocus("Maker_Name")}
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
                      name={"Maker_Name"}
                      focusOptions={() => method.setFocus("DBA_Name")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>DBA Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"DBA_Name"}
                      focusOptions={() => method.setFocus("Weekly_Limit")}
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
                      name={"Weekly_Limit"}
                      focusOptions={() => method.setFocus("Address_Type")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Address Type:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Address_Type"}
                      focusOptions={() =>
                        method.setFocus("Maker_Processing_Fee")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Personal Check Fee:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Maker_Processing_Fee"}
                      focusOptions={() => method.setFocus("Street_Address")}
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
                      name={"Street_Address"}
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
                      name={"City"}
                      focusOptions={() => method.setFocus("State")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>State:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"State"}
                      focusOptions={() => method.setFocus("Zip")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>ZIP:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Zip"}
                      focusOptions={() => method.setFocus("Owner_First_Name")}
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
                      name={"Owner_First_Name"}
                      focusOptions={() => method.setFocus("Owner_Last_Name")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Owner Last Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Owner_Last_Name"}
                      focusOptions={() => method.setFocus("Owner_Phone")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Owner Phone Number:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Owner_Phone"}
                      focusOptions={() =>
                        method.setFocus("Secondary_First_Name")
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
                      name={"Secondary_First_Name"}
                      focusOptions={() =>
                        method.setFocus("Secondary_Last_Name")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Secondary Last Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Secondary_Last_Name"}
                      focusOptions={() => method.setFocus("Secondary_Phone")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Secondary Phone Number:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Secondary_Phone"}
                      focusOptions={() => method.setFocus("Enroll_Date")}
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
                      name="Enroll_Date"
                      showTime={true}
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
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Enroll_Store_Name"}
                      focusOptions={() =>
                        method.setFocus("Last_Transaction_Date")
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
                      name="Last_Transaction_Date"
                      showTime={true}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store ID:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Last_Transaction_Store_Id"}
                      focusOptions={() =>
                        method.setFocus("Last_Transaction_Store_Name")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Store Name:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Last_Transaction_Store_Name"}
                      focusOptions={() => method.setFocus("Verification_Date")}
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
                      name="Verification_Date"
                      showTime={true}
                      focusOptions={() => method.setFocus("Verified_By_UserId")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Last Verified By:</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Verified_By_UserId"}
                      focusOptions={() => method.setFocus("BankName")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                  <FormLabel>Entity Creation Date:</FormLabel>
                  <div>
                    <DatePickerField
                      control={method.control}
                      name="Entity_Creation_Date"
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
                      name={"Total_Approved_No"}
                      focusOptions={() => method.setFocus("Total_Declined_No")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Declined</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Total_Declined_No"}
                      focusOptions={() => method.setFocus("Total_Returned_No")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Returned CR</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Total_Returned_No"}
                      focusOptions={() =>
                        method.setFocus("Total_Returned_By_Store_No")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Reutrned Store</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Total_Returned_By_Store_No"}
                      focusOptions={() => method.setFocus("Total_Resolved_No")}
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12 text-center">
                  <FormLabel>Resolved CR</FormLabel>
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Total_Resolved_No"}
                      focusOptions={() =>
                        method.setFocus("Total_Approved_Amount")
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
                      name={"Total_Approved_Amount"}
                      focusOptions={() =>
                        method.setFocus("Total_Declined_Amount")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Total_Declined_Amount"}
                      focusOptions={() =>
                        method.setFocus("Total_Returned_Amount")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Total_Returned_Amount"}
                      focusOptions={() =>
                        method.setFocus("Total_Returned_By_Store_Amount")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Total_Returned_By_Store_Amount"}
                      focusOptions={() =>
                        method.setFocus("Total_Resolved_Amount")
                      }
                    />
                  </div>
                </FormColumn>
                <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                  <div>
                    <TextInputField
                      control={method.control}
                      name={"Total_Resolved_Amount"}
                      focusOptions={() =>
                        method.setFocus("Total_Resolved_Amount")
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
                      name={"Pending_Reason"}
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
                      name={"Pending_Decline_Reasons"}
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
