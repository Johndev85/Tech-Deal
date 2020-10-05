import { createContext } from 'react'
import isLogged from '../pages/login'

const AuthContext = createContext()
const TokenContext = createContext()

const Provider = ({children}) => {

   const state = [isLogged()]

    return (

        <AuthContext.Provider value={state.isAuth}>
        <TokenContext.Provider value={state.userToken}>
            {children}
        </TokenContext.Provider>
        </AuthContext.Provider>

    )
}
export default Provider
