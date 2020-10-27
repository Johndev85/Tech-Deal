import React, { useContext, useState } from "react"

const UserContext = React.createContext({
    userAuth: null,
    userToken: null,
    setAuth: {},
    setToken: {},
})

export const useUserContext = () => useContext(UserContext)

export function UserContextProvider({ children }) {
    const [userAuth, setAuth] = useState(false)
    const [userToken, setToken] = useState(null)

    return (
        <UserContext.Provider
            value={{ userAuth, userToken, setAuth, setToken }}
        >
            {children}
        </UserContext.Provider>
    )
}
