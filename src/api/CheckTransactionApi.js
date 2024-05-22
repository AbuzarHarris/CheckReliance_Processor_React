import axios from "axios"

const apiUrl = import.meta.env.VITE_APP_API_URL
const CONTROLLER = "Transaction"
const PENDING_TRANSACTION_LIST = "Pending_Transaction_List"
const DELETEMETHOD = "BankAccountDelete"
const POSTMEHTOD = "BankAccountInsertUpdate"

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
