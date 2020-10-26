import { useRouter } from "next/router"
import UserService from "../services/UsersService"
import { useState, useEffect } from "react"
import jwtDecode from "jwt-decode"
import AuthService from "../services/AuthService"

export default function useAthUser(login) {
    const router = useRouter()
    const [userToken, setUserTk] = useState(null)
    const [tkDecoded, setTkDecoded] = useState(null)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        UserService.login(login)
            .then((response) => {
                if (response.status === 200) {
                    setUserTk(response.data.token)
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
            setTkDecoded(decoded)
            setIsAuth(true)
            AuthService.login(userToken)
            alert("Login Sucess")
            router.push("/")
        } else {
            window.sessionStorage.removeItem("jwt")
            alert("No such user found")
        }
    }

    // function logout() {
    //     window.sessionStorage.removeItem("jwt")
    //     setUserToken(null)
    //     setTkDecoded(null)
    //     setIsAuth(false)
    // }
    return { auth: isAuth, tk: tkDecoded }
}
