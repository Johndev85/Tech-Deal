import { useRouter } from "next/router"
import UserService from "../services/UsersService"
import { useState, useEffect, useCallback } from "react"
import jwtDecode from "jwt-decode"

export default function useAthUser(login) {
    const router = useRouter()
    const [userToken, setUserToken] = useState(null)
    const [tkDecoded, setTkDecoded] = useState(null)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        UserService.login(login)
            .then((response) => {
                if (response.data.token) {
                    setUserToken(response.data.token)
                    isLogged(userToken)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [login])

    function isLogged(token) {
        if (token !== null) {
            const decoded = jwtDecode(token)
            console.log(token)
            if (decoded) {
                setTkDecoded(decoded)
                setIsAuth(true)
                alert("Login Sucess")
                window.sessionStorage.setItem("jwt", token)
                router.push("/")
            }
        } else {
            window.sessionStorage.removeItem("jwt")
            alert("No such user found")
        }
    }

    function logout() {
        window.sessionStorage.removeItem("jwt")
        setUserToken(null)
        setTkDecoded(null)
        setIsAuth(false)
    }
    return { auth: isAuth, tk: tkDecoded, logoout: logout }
}
