import React from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Link } from "react-router-dom"
import { Button } from "primereact/button"
import { ROUTE_URLS } from "../utils/enums"

const Home = () => {
  let products = [
    {
      TransactionID: 1,
      TransactionDate: "2-May-2023",
      TransactionTime: "15:30 pm",
      MakerName: "John Doe",
      Routing: "Accounting",
      Account: "Account1",
      Check: "Check1",
      CheckAmount: 12000,
      StoreID: 22,
      StoreName: "Store A",
      ProcessingStatus: "Done",
      ProcessingBy: "Alice",
      ProcessingTime: "2032",
      SecondReview: "Reviewed",
      RedAlert: "N/A",
    },
    {
      TransactionID: 2,
      TransactionDate: "3-May-2023",
      TransactionTime: "11:00 am",
      MakerName: "Jane Smith",
      Routing: "Sales",
      Account: "Account2",
      Check: "Check2",
      CheckAmount: 15000,
      StoreID: 23,
      StoreName: "Store B",
      ProcessingStatus: "Pending",
      ProcessingBy: "Bob",
      ProcessingTime: "1100",
      SecondReview: "Not Reviewed",
      RedAlert: "N/A",
    },
    {
      TransactionID: 3,
      TransactionDate: "4-May-2023",
      TransactionTime: "09:15 am",
      MakerName: "Sam Wilson",
      Routing: "Logistics",
      Account: "Account3",
      Check: "Check3",
      CheckAmount: 8000,
      StoreID: 24,
      StoreName: "Store C",
      ProcessingStatus: "In Progress",
      ProcessingBy: "Charlie",
      ProcessingTime: "0915",
      SecondReview: "Reviewed",
      RedAlert: "High",
    },
  ]

  const LinkTemplate = (data) => {
    return (
      <>
        <Link to={ROUTE_URLS.CHECK_TRANSACTION_ROUTE_URL}>
          <Button label={data.TransactionID} link />
        </Link>
      </>
    )
  }

  return (
    <>
      <DataTable
        showGridlines
        value={products}
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
          field="TransactionID"
          header="Transaction ID"
          body={LinkTemplate}
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="TransactionDate"
          header="Transaction Date"
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="TransactionTime"
          header="Transaction Time"
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="MakerName"
          header="Maker Name"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Routing"
          header="Routing"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Account"
          header="Account"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="Check"
          header="Check"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="CheckAmount"
          header="Check Amount"
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="StoreID"
          header="Store ID"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="StoreName"
          header="Store Name"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="ProcessingStatus"
          header="Processing Status"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="ProcessingBy"
          header="Processing By"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="ProcessingTime"
          header="Processing Time"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="SecondReview"
          header="Second Review"
        ></Column>
        <Column
          headerStyle={{
            textAlign: "center",
            background: "#005073",
            color: "#fff",
          }}
          field="RedAlert"
          header="Red Alert"
        ></Column>
      </DataTable>
    </>
  )
}

export default Home
