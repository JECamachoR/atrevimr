import * as React from "react"
import { User } from "../API"
const UserContext = React.createContext<User>(null)
export default UserContext