import React, { useState } from "react"
import useAuthUser from "../hooks/useAuthUser"

const Context = React.createContext({})

export function UserContextProvider({ children }) {
    const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"))
    const { auth, tk, logout } = useAuthUser()

    return (
        <Context.Provider value={{ jwt, setJWT, auth, tk, logout }}>
            {children}
        </Context.Provider>
    )
}

export default Context
