import * as React from "react"
import { Goal } from "../API"
const GoalsContext = React.createContext<Goal[]>([])
export default GoalsContext