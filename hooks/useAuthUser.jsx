import { useRouter } from "next/router"
import UserService from "../services/UsersService"
import { useState, useEffect } from "react"
import AuthService from "../services/AuthService"
import { useUserContext } from "../context/UserContext"

export default function useAthUser(login) {
    const router = useRouter()
    const [userTk, setUserTk] = useState(null)
    const { setAuth, setToken } = useUserContext()

    useEffect(() => {
        UserService.login(login)
            .then((response) => {
                if (response.status === 200 && response.data.token) {
                    setUserTk(response.data.token)
                    isLogged(userTk)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [login])

    function isLogged(token) {
        if (token !== null) {
            console.log(token)
            setAuth(true)
            setToken(token)
            AuthService.login(token)
            alert("Login Sucess")
            router.push("/")
        } else {
            alert("No such user found")
        }
    }
}
