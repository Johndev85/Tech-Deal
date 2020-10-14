import { useRouter } from "next/router"
import UserService from "../services/UsersService"
import { useState, useEffect } from "react"
import jwt_decode from "jwt-decode"

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
            const decoded = jwt_decode(token)
            if (decoded) {
                setTkDecoded(decoded)
                setIsAuth(true)
                alert("Login Sucess")
                router.push("/")
            }
        } else {
            alert("No such user found")
            console.log("No such user found")
        }
    }

    return { auth: isAuth, tk: tkDecoded }
}
