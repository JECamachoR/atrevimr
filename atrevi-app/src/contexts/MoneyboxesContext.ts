import * as React from "react"
import { Fund } from "../API"
const MoneyboxesContext = React.createContext<Fund[]>([])
export default MoneyboxesContext