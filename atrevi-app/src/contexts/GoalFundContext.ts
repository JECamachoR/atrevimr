import * as React from "react"
import { Fund } from "../API"
const GoalFundContext = React.createContext<Fund | null>(null)
export default GoalFundContext