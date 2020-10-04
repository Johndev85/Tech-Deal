import { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({children}) => {
    const [isAuth, setIsAuth] = useState(true)

    const value = {
        isAuth,
        activateAuth: () => {
            setIsAuth(true)
        }
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider
