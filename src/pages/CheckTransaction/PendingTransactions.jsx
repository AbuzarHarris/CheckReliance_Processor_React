import React from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Link } from "react-router-dom"
import { Button } from "primereact/button"
import { QUERY_KEY, ROUTE_URLS } from "../../utils/enums"
import { useQuery } from "@tanstack/react-query"
import { Pending_Transaction_List } from "../../api/CheckTransactionApi"
import { useAuthProvider } from "../../context/AuthContext"

const PendingTransactions = () => {
  const { user } = useAuthProvider()
  const { data: PendingTransactionsData } = useQuery({
    queryKey: [QUERY_KEY.PENDING_TRANSACTION_LIST],
    queryFn: () =>
      Pending_Transaction_List({
        UserId: "ifty",
        User_Role: user.User_Role,
        Process_Pendings: user.Process_Pendings,
      }),
    enabled: user != null,
    refetchOnWindowFocus: false,
  })
  console.log(PendingTransactionsData)
  const LinkTemplate = (data) => {
    return (
      <>
        <Link
          to={`${ROUTE_URLS.CHECK_TRANSACTION_ROUTE_URL}/${data.Transaction_ID}`}
        >
          <Button label={data.Transaction_ID} link />
        </Link>
      </>
    )
  }

  return (
    <>
      <DataTable
        showGridlines
        value={PendingTransactionsData}
        size="small"
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          bodyStyle={{ textAlign: "center" }}
          field="Transaction_ID"
          header="Transaction ID"
          body={LinkTemplate}
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Transaction_Date"
          header="Transaction Date"
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Transaction_Time"
          header="Transaction Time"
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Maker_Name"
          header="Maker Name"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Routing_Number"
          header="Routing #"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Account_Number"
          header="Account #"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Check_Number"
          header="Check #"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Check_Amount"
          header="Check Amount"
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Fee"
          header="Fee"
          bodyStyle={{ textAlign: "center" }}
          hidden
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Amount_Paid"
          header="Amount_Paid"
          bodyStyle={{ textAlign: "center" }}
          hidden
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Store_ID"
          header="Store ID"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Store_Name"
          header="Store Name"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="DBA_Name"
          header="DBA_Name"
          bodyStyle={{ textAlign: "center" }}
          hidden
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Processing_Status"
          header="Processing Status"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Pending_Reason"
          header="Pending_Reason"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Processing_By"
          header="Processing By"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Pickup_Time"
          header="Pickup Time"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Marked_For_2nd_Review"
          header="Second Review"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Red_Alert"
          header="Red Alert"
        ></Column>
      </DataTable>
    </>
  )
}

export default PendingTransactions
