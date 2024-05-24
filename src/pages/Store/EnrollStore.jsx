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
import { ArrowRightLeft, Banknote, Landmark, Store, User } from "lucide-react"
import { Image } from "primereact/image"
import Cheque from "../../assets/cheque.png"
import { Button } from "primereact/button"
import { SplitButton } from "primereact/splitbutton"
export default function EnrollStore() {
  const method = useForm({
    defaultValues: {
      Store_Id: "0",
      Group_Id: "",
      Store_Status: "",
      Store_Name: "",
      DBA_Name: "",
      Check_Cashing_License_Number: "",
      Check_Cashing_License_Expiration: new Date(),
      EIN: "",
      Store_Address1: "",
      Store_Address2: "",
      Store_City: "",
      Store_State: "",
      Store_Zip: "",
      Store_Phone: "",
      Store_Email: "",
      Processing_Fee: "",
      Processing_Fee_Type: "",
      Monthly_Fee: "",
      Research_Maker_Fee: "",
      Guarantee_Fee: "",
      Profile: "",
      Owner1_First_Name: "",
      Owner1_Last_Name: "",
      Owner1_Middle_Name: "",
      Owner1_Address1: "",
      Owner1_Address2: "",
      Owner1_City: "",
      Owner1_State: "",
      Owner1_Zip: "",
      Owner1_Phone: "",
      Owner1_DOB: new Date(),
      Owner1_SSN: "",
      Owner1_Alien_Registration_No: "",
      Owner1_Passport_No: "",
      Owner2_First_Name: "",
      Owner2_Last_Name: "",
      Owner2_Middle_Name: "",
      Owner2_Address1: "",
      Owner2_Address2: "",
      Owner2_City: "",
      Owner2_State: "",
      Owner2_Zip: "",
      Owner2_Phone: "",
      Owner2_DOB: new Date(),
      Owner2_SSN: "",
      Owner2_Alien_Registration_No: "",
      Owner2_Passport_No: "",
      Routing_Number: "",
      Account_Number: "",
      Bank_Name: "",
      Account_Name: "",
      Store_User_Id: "",
      Password: "",
      Comments: "",
      Landlord_Name: "",
      Fee_Calculation_Method: "",
      Check_Guarantee: "No",
      User_Id: "",
      User_Assigned: "",
      isNewStore: "",
      Check_Cashing_Rates: "",
      Store_Corporation: "",
      FingerVein_Option: "No",
    },
  })
  const shadow = "bg-white mb-1 rounded-xl"
  return (
    <>
      <form>
        <FormRow className="gap-0">
          <div className="col-span-12 lg:col-span-12 xl:col-span-12">
            <div className={`p-3 ${shadow}`}>
              <div className="col-span-12 lg:col-span-12 xl:col-span-12">
                <div className="flex gap-2 items-center">
                  <Store />
                  <span className="text-xl font-semibold">
                    Store Information
                  </span>
                </div>
                <hr className="my-1" />
                <FormRow className="mt-3">
                  <FormColumn className="col-span-12 lg:col-span-1 xl:col-span-1 md:col-span-12">
                    <FormLabel>Group ID:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Group_Id"}
                        focusOptions={() => method.setFocus("Store_Name")}
                      />
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                    <FormLabel>Store Name:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Store_Name"}
                        focusOptions={() => method.setFocus("DBA_Name")}
                      />
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                    <FormLabel>DBA Name:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"DBA_Name"}
                        focusOptions={() =>
                          method.setFocus("Check_Cashing_License_Number")
                        }
                      />
                    </div>
                  </FormColumn>

                  <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                    <FormLabel>Check Cashing License #:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Check_Cashing_License_Number"}
                        focusOptions={() =>
                          method.setFocus("Check_Cashing_License_Expiration")
                        }
                      />
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                    <FormLabel>License Expiration:</FormLabel>
                    <div>
                      <DatePickerField
                        control={method.control}
                        name={"Check_Cashing_License_Expiration"}
                      ></DatePickerField>
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                    <FormLabel>User ID:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"User_Id"}
                        focusOptions={() => method.setFocus("Store_Address1")}
                      />
                    </div>
                  </FormColumn>
                </FormRow>
                <FormRow>
                  <FormColumn className="col-span-12 lg:col-span-4 xl:col-span-4 md:col-span-12">
                    <FormLabel>Street Address 1:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Store_Address1"}
                        focusOptions={() => method.setFocus("Store_City")}
                      />
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                    <FormLabel>City:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Store_City"}
                        focusOptions={() => method.setFocus("Store_State")}
                      />
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-1 xl:col-span-1 md:col-span-12">
                    <FormLabel>State:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Store_State"}
                        focusOptions={() => method.setFocus("Store_Zip")}
                      />
                    </div>
                  </FormColumn>

                  <FormColumn className="col-span-12 lg:col-span-1 xl:col-span-1 md:col-span-12">
                    <FormLabel>Zip:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Store_Zip"}
                        focusOptions={() => method.setFocus("Store_Phone")}
                      />
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                    <FormLabel>Phone:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Store_Phone"}
                        focusOptions={() => method.setFocus("Password")}
                      />
                    </div>
                  </FormColumn>
                  <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                    <FormLabel>Password:</FormLabel>
                    <div>
                      <TextInputField
                        control={method.control}
                        name={"Password"}
                        focusOptions={() => method.setFocus("Store_Email")}
                      />
                    </div>
                  </FormColumn>
                </FormRow>
              </div>

              <FormRow>
                <div className="col-span-8 lg:col-span-8 xl:col-span-8">
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-5 xl:col-span-5 md:col-span-12">
                      <FormLabel>Email:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Store_Email"}
                          focusOptions={() => method.setFocus("EIN")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                      <FormLabel>EIN:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"EIN"}
                          focusOptions={() =>
                            method.setFocus("Store_Corporation")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-5 xl:col-span-5 md:col-span-12">
                      <FormLabel>Corporation:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Store_Corporation"}
                          focusOptions={() => method.setFocus("Processing_Fee")}
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                      <FormLabel>Check Cashing Fee:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Processing_Fee"}
                          focusOptions={() =>
                            method.setFocus("Processing_Fee_Type")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Fee Type:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Processing_Fee_Type"}
                          focusOptions={() => method.setFocus("Monthly_Fee")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                      <FormLabel>Monthly Fee:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Monthly_Fee"}
                          focusOptions={() =>
                            method.setFocus("Check_Cashing_Rates")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Check Cashing Rates:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Check_Cashing_Rates"}
                          focusOptions={() =>
                            method.setFocus("Check_Cashing_Rates")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                      <FormLabel>Store Manager:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Store_Manager"}
                          focusOptions={() =>
                            method.setFocus("Owner1_First_Name")
                          }
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                  <div className="flex gap-2 items-center mt-3 ">
                    <User />
                    <span className="text-xl font-semibold">
                      Owner Information
                    </span>
                  </div>
                  <hr className="my-1" />
                  <FormRow className="mt-3">
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>First Name:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_First_Name"}
                          focusOptions={() =>
                            method.setFocus("Owner1_Last_Name")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Last Name:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_Last_Name"}
                          focusOptions={() =>
                            method.setFocus("Owner1_Middle_Name")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Middle Initial:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_Middle_Name"}
                          focusOptions={() => method.setFocus("Processing_Fee")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Date Of Birth:</FormLabel>
                      <div>
                        <DatePickerField
                          control={method.control}
                          name={"Owner1_DOB"}
                          focusOptions={() =>
                            method.setFocus("Owner1_Address1")
                          }
                        ></DatePickerField>
                      </div>
                    </FormColumn>
                  </FormRow>
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Street Address:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_Address1"}
                          focusOptions={() =>
                            method.setFocus("Owner1_Address2")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Apt #:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_Address2"}
                          focusOptions={() => method.setFocus("Owner1_City")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>City:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_City"}
                          focusOptions={() => method.setFocus("Owner1_State")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                      <FormLabel>State:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_State"}
                          focusOptions={() =>
                            method.setFocus("Owner1_Address1")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-1 xl:col-span-1 md:col-span-12">
                      <FormLabel>Zip:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_Zip"}
                          focusOptions={() => method.setFocus("Owner1_Phone")}
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Phone Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_Phone"}
                          focusOptions={() =>
                            method.setFocus("Owner1_Passport_No")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Passport Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_Passport_No"}
                          focusOptions={() => method.setFocus("Owner1_SSN")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Spcial Security Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_SSN"}
                          focusOptions={() =>
                            method.setFocus("Owner1_Alien_Registration_No")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Alien Registration Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner1_Alien_Registration_No"}
                          focusOptions={() =>
                            method.setFocus("Owner2_First_Name")
                          }
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                  <div className="flex gap-2 items-center mt-3 ">
                    <User />
                    <span className="text-xl font-semibold">
                      Second Owner Information
                    </span>
                  </div>
                  <hr className="my-1" />
                  <FormRow className="mt-3">
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>First Name:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_First_Name"}
                          focusOptions={() =>
                            method.setFocus("Owner2_Last_Name")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Last Name:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_Last_Name"}
                          focusOptions={() =>
                            method.setFocus("Owner2_Middle_Name")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Middle Initial:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_Middle_Name"}
                          focusOptions={() => method.setFocus("Owner2_DOB")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Date Of Birth:</FormLabel>
                      <div>
                        <DatePickerField
                          control={method.control}
                          name={"Owner2_DOB"}
                          focusOptions={() =>
                            method.setFocus("Owner1_Address1")
                          }
                        ></DatePickerField>
                      </div>
                    </FormColumn>
                  </FormRow>
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Street Address:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_Address1"}
                          focusOptions={() =>
                            method.setFocus("Owner2_Address2")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Apt #:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_Address2"}
                          focusOptions={() => method.setFocus("Owner2_City")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>City:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_City"}
                          focusOptions={() => method.setFocus("Owner2_State")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-2 xl:col-span-2 md:col-span-12">
                      <FormLabel>State:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_State"}
                          focusOptions={() => method.setFocus("Owner2_Zip")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-1 xl:col-span-1 md:col-span-12">
                      <FormLabel>Zip:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_Zip"}
                          focusOptions={() => method.setFocus("Owner2_Phone")}
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Phone Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_Phone"}
                          focusOptions={() =>
                            method.setFocus("Owner2_Passport_No")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Passport Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_Passport_No"}
                          focusOptions={() => method.setFocus("Owner2_SSN")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Spcial Security Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_SSN"}
                          focusOptions={() =>
                            method.setFocus("Owner2_Alien_Registration_No")
                          }
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Alien Registration Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Owner2_Alien_Registration_No"}
                          focusOptions={() => method.setFocus("Routing_Number")}
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                  <div className="flex gap-2 items-center mt-3 ">
                    <Landmark />
                    <span className="text-xl font-semibold">
                      Bank Information
                    </span>
                  </div>
                  <hr className="my-1" />
                  <FormRow className="mt-3">
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Routing Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Routing_Number"}
                          focusOptions={() => method.setFocus("Account_Number")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Account Number:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Account_Number"}
                          focusOptions={() => method.setFocus("Bank_Name")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Bank Name:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Bank_Name"}
                          focusOptions={() => method.setFocus("Account_Name")}
                        />
                      </div>
                    </FormColumn>
                    <FormColumn className="col-span-12 lg:col-span-3 xl:col-span-3 md:col-span-12">
                      <FormLabel>Account Name:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Account_Name"}
                          focusOptions={() => method.setFocus("Account_Name")}
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                </div>
                <div className="col-span-12 lg:col-span-4 xl:col-span-4">
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                      <FormLabel>Comments/Notes:</FormLabel>
                      <div>
                        <TextAreaField
                          control={method.control}
                          name={"Group_Id"}
                          focusOptions={() => method.setFocus("Store_Name")}
                          style={{ height: "440px", width: "100%" }}
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12">
                      <FormLabel>Landlord Name:</FormLabel>
                      <div>
                        <TextInputField
                          control={method.control}
                          name={"Group_Id"}
                          focusOptions={() => method.setFocus("Store_Name")}
                        />
                      </div>
                    </FormColumn>
                  </FormRow>
                  <FormRow>
                    <FormColumn className="col-span-12 lg:col-span-12 xl:col-span-12 md:col-span-12 mt-12 ml-auto">
                      <Button
                        className="flex-20 w-80"
                        type="button"
                        label="ENROLL STORE"
                        severity="success"
                      />
                    </FormColumn>
                  </FormRow>
                </div>
              </FormRow>
            </div>
          </div>
        </FormRow>
        <div className="bg-white rounded-md flex gap-2 items-center flex-wrap"></div>
      </form>
    </>
  )
}
