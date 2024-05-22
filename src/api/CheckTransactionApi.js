import axios from "axios"

const apiUrl = import.meta.env.VITE_APP_API_URL
const CONTROLLER = "Transaction"
const PENDING_TRANSACTION_LIST = "Pending_Transaction_List"
const TRANSACTION_GET = "Transaction_Get"
const COMMERCIAL_CUSTOMER_GET = "Commercial_Customer_Get"
const GETCHECKSCASHEDBYCUSTOMER = "getChecksCashedByCustomer"
const MAKER_GET = "Maker_Get"
const Maker_Notes_By_CheckReliance_List = "Maker_Notes_By_CheckReliance_List"
const Customer_Get = "Customer_Get"
const IMAGE_PHOTO_GET = "Image_Photo_Get"
const IMAGE_IDCARD_GET = "Image_IDCard_Get"
const IMAGES_CHECKS_GET = "Images_Checks_Get"
const STORE_GET = "Store_Get"

export async function Pending_Transaction_List({
  UserId,
  User_Role,
  Process_Pendings,
}) {
  const { data } = await axios.post(
    `${apiUrl}/${CONTROLLER}/${PENDING_TRANSACTION_LIST}`,
    {
      UserId: UserId,
      User_Role: User_Role,
      Process_Pendings: Process_Pendings,
    }
  )
  return data ?? []
}

export async function Check_Transaction_data({ UserId, TransactionID }) {
  //let apistatus = true
  //let transactiondata = []
  let commercialcustomerdata = []
  let customercheckdata = []
  let makerdata = []
  let makernotesdata = []
  let customerdata = []
  let imagephotodata = []
  let imagecheckdata = []
  let storedata = []
  const { data: transactiondata, currentstatus: apistatus } =
    TransactionGet(TransactionID)
  if (apistatus) {
  }
}
async function TransactionGet(TransactionID) {
  let currentstatus = true
  const { data } = await axios.post(
    `${apiUrl}/${CONTROLLER}/${TRANSACTION_GET}`,
    {
      Transaction_Id: TransactionID,
    }
  )
  return { data, currentstatus }
}

// async function TransactionGet() {
//   const { data } = await axios.post(
//     `${apiUrl}/${CONTROLLER}/${TRANSACTION_GET}`,
//     {
//       Transaction_Id: TransactionID,
//     }
//   )
//   return data ?? []
// }

// async function TransactionGet() {
//   const { data } = await axios.post(
//     `${apiUrl}/${CONTROLLER}/${TRANSACTION_GET}`,
//     {
//       Transaction_Id: TransactionID,
//     }
//   )
//   return data ?? []
// }

// async function TransactionGet() {
//   const { data } = await axios.post(
//     `${apiUrl}/${CONTROLLER}/${TRANSACTION_GET}`,
//     {
//       Transaction_Id: TransactionID,
//     }
//   )
//   return data ?? []
// }

// async function TransactionGet() {
//   const { data } = await axios.post(
//     `${apiUrl}/${CONTROLLER}/${TRANSACTION_GET}`,
//     {
//       Transaction_Id: TransactionID,
//     }
//   )
//   return data ?? []
// }

// async function TransactionGet() {
//   const { data } = await axios.post(
//     `${apiUrl}/${CONTROLLER}/${TRANSACTION_GET}`,
//     {
//       Transaction_Id: TransactionID,
//     }
//   )
//   return data ?? []
// }

// async function TransactionGet() {
//   const { data } = await axios.post(
//     `${apiUrl}/${CONTROLLER}/${TRANSACTION_GET}`,
//     {
//       Transaction_Id: TransactionID,
//     }
//   )
//   return data ?? []
// }

// async function TransactionGet() {
//   const { data } = await axios.post(
//     `${apiUrl}/${CONTROLLER}/${TRANSACTION_GET}`,
//     {
//       Transaction_Id: TransactionID,
//     }
//   )
//   return data ?? []
// }
