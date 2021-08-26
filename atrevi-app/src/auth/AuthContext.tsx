import * as React from "react"
export type AuthContextType = any

const defaultValue : AuthContextType = null
const AuthContext = React.createContext(defaultValue)
export default AuthContext
