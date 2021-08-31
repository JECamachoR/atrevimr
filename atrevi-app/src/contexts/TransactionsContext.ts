import * as React from "react"
import { Transaction } from "../API"
const TransactionsContext = React.createContext<Transaction[]>([])
export default TransactionsContext