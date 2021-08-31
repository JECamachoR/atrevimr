import * as React from "react"
export type AuthContextType = {username: string}

const defaultValue : AuthContextType = null
const AuthContext = React.createContext(defaultValue)
export default AuthContext
