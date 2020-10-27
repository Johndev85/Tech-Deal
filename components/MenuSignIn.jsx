import Link from "next/link"
import { useRouter } from "next/router"
import { useUserContext } from "../context/UserContext"
import AuthService from "../services/AuthService"

import styles from "../components/styles/header.module.scss"

export default function MenuSignIn() {
    const { setAuth, setToken } = useUserContext()

    const logout = () => {
        AuthService.logout()
        setToken(null)
        setAuth(false)
    }

    const {
        query: { id },
    } = useRouter()

    return (
        <nav className={styles.header__menu}>
            <a href="">Favorites</a>
            <img
                className={styles.header__menu__userImg}
                src="/images/user.svg"
                alt="user-icon"
            />
            <Link href={`/user/${id}`}>
                <a>User</a>
            </Link>

            <button onClick={logout}>Logout</button>
        </nav>
    )
}
