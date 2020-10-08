import React, { useState } from "react"

const UserContext = React.createContext({})

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)

    const value = {
        isAuth,
        activateAuth: () => {
            setIsAuth(true)
        },
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default {
    Provider,
    Consumer: UserContext.Consumer,
}
