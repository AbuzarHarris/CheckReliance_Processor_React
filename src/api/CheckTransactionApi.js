import axios from "axios"

const apiUrl = import.meta.env.VITE_APP_API_URL
const apiUrlpending = import.meta.env.VITE_APP_API_URL_pending
const CONTROLLER = "Transaction"
const PENDING_TRANSACTION_LIST = "Pending_Transaction_List"
const TRANSACTION_GET = "Transaction_Get"
const COMMERCIAL_CUSTOMER_GET = "Commercial_Customer_Get"
const GETCHECKSCASHEDBYCUSTOMER = "getChecksCashedByCustomer"
const MAKER_GET = "Maker_Get"
const MAKER_NOTES_BY_CHECKRELIANCE_LIST = "Maker_Notes_By_CheckReliance_List"
const CUSTOMER_GET = "Customer_Get"
const IMAGE_PHOTO_GET = "Image_Photo_Get"
const IMAGE_IDCARD_GET = "Image_IDCard_Get"
const IMAGES_CHECKS_GET = "Images_Checks_Get"
const STORE_GET = "Store_Get"

export async function Pending_Transaction_List({
  UserId,
  User_Role,
  Process_Pendings,
}) {
  try {
    const { data } = await axios.post(
      `${apiUrlpending}/${CONTROLLER}/${PENDING_TRANSACTION_LIST}`,
      {
        UserId: UserId,
        User_Role: User_Role,
        Process_Pendings: Process_Pendings,
      }
    )
    return data ?? []
  } catch (err) {
    console.log(err)
  }
}

export async function Check_Transaction_data({ UserId, TransactionID }) {
  let commercialCustomerstatus = true
  let commercialcustomerdata = []
  const { data: transactiondata, currentstatus: Transactionstatus } =
    await TransactionGet(TransactionID)
  if (
    Transactionstatus &&
    transactiondata.length > 0 &&
    parseInt(0 + transactiondata["Commercial_Customer_Id"]) > 0
  ) {
    const { data: comcustomerdata, currentstatus: comCustomerstatus } =
      await CommerialCustomerGet(
        parseInt(0 + transactiondata["Commercial_Customer_Id"])
      )
    commercialCustomerstatus = comCustomerstatus
    commercialcustomerdata = comcustomerdata
  }
  const { data: customercheckdata, currentstatus: customerchecktatus } =
    await CheckCashbyCustomer(
      transactiondata["Customer_ID"],
      transactiondata["Store_ID"],
      transactiondata["Check_Amount"]
    )
  const { data: makerdata, currentstatus: makerdatastatus } = await MakerGet(
    transactiondata["Maker_ID"],
    transactiondata["Store_ID"]
  )

  const { data: makernotesdata, currentstatus: makernotesstatus } =
    MakerNotesList(transactiondata["Maker_ID"])

  const { data: customerdata, currentstatus: customerdatastatus } =
    await Customerget(
      transactiondata["Customer_ID"],
      transactiondata["Store_ID"]
    )

  const { data: imagephotodata, currentstatus: imagephotodatastatus } =
    await ImagePhotoGet(transactiondata["Customer_ID"])

  const { data: imageidcarddata, currentstatus: imageidcarddatastatus } =
    await ImageIDCardGet(transactiondata["Customer_ID"])
  const { data: imagecheckdata, currentstatus: imagecheckdatastatus } =
    await ImageChecksGet(makerdata["image_Check_ID"], TransactionID)
  const { data: storedata, currentstatus: storedatastatus } = await StoreGet(
    transactiondata["Store_ID"]
  )
  const dataaa = {
    transactiondata,
    commercialcustomerdata,
    customercheckdata,
    makerdata,
    makernotesdata,
    imagephotodata,
    imageidcarddata,
    imagecheckdata,
    storedata,
  }
  return dataaa
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

async function CommerialCustomerGet(Commercial_Customer_Id) {
  let currentstatus = true
  const { data } = await axios.post(
    `${apiUrl}/Customers/${COMMERCIAL_CUSTOMER_GET}`,
    {
      Commercial_Customer_Id: Commercial_Customer_Id,
    }
  )
  return { data, currentstatus }
}

async function CheckCashbyCustomer(Customer_Id, Store_Id, Check_Amount) {
  let currentstatus = true
  const { data } = await axios.post(
    `${apiUrl}/Customers/${GETCHECKSCASHEDBYCUSTOMER}`,
    {
      Customer_Id: Customer_Id,
      Store_Id: Store_Id,
      Check_Amount: Check_Amount.replace("$", "").replaceAll(",", ""),
    }
  )
  return { data, currentstatus }
}
async function MakerGet(maker_Id, store_Id) {
  let currentstatus = true
  const { data } = await axios.post(`${apiUrl}/Maker/${MAKER_GET}`, {
    maker_Id: maker_Id.toString(),
    store_Id: "",
  })
  return { data, currentstatus }
}
async function MakerNotesList(Maker_Id) {
  let currentstatus = true
  try {
    const { data } = await axios.post(
      `${apiUrlpending}/Maker/${MAKER_NOTES_BY_CHECKRELIANCE_LIST}`,
      {
        Maker_Id: Maker_Id,
      }
    )
    return { data, currentstatus: true }
  } catch (error) {
    return { data: {}, currentstatus: false }
  }
}
async function Customerget(Customer_ID, Store_Id) {
  let currentstatus = true
  const { data } = await axios.post(`${apiUrl}/Customers/${CUSTOMER_GET}`, {
    Customer_ID: Customer_ID.toString(),
    Store_Id: "",
  })
  return { data, currentstatus }
}
async function ImagePhotoGet(customer_ID) {
  let currentstatus = true
  const { data } = await axios.post(`${apiUrl}/Images/${IMAGE_PHOTO_GET}`, {
    customer_ID: customer_ID,
  })
  return { data, currentstatus }
}
async function ImageIDCardGet(customer_ID) {
  let currentstatus = true
  try {
    const { data } = await axios.post(`${apiUrl}/Images/${IMAGE_IDCARD_GET}`, {
      customer_ID: customer_ID,
    })
    return { data, currentstatus }
  } catch (err) {
    return { data: {}, currentstatus: false }
  }
}
async function ImageChecksGet(Image_Check_ID, Transaction_ID) {
  console.log(Image_Check_ID)
  let currentstatus = true
  try {
    const { data } = await axios.post(
      `${apiUrlpending}/Images/${IMAGES_CHECKS_GET}`,
      {
        Image_Check_ID: Image_Check_ID,
        Transaction_ID: Transaction_ID,
      }
    )
    return { data, currentstatus }
  } catch (error) {
    return { data: {}, currentstatus: false }
  }
}
async function StoreGet(Store_Id) {
  let currentstatus = true
  try {
    const { data } = await axios.post(`${apiUrl}/Store/${STORE_GET}`, {
      Store_Id: Store_Id.toString(),
    })
    return { data, currentstatus }
  } catch (error) {
    console.log(error)
    return { data: {}, currentstatus: false }
  }
}
