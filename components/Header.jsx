import styles from "../components/styles/header.module.scss"
import MenuSignIn from "../components/MenuSignIn"
import MenuSignOut from "../components/MenuSignOut"
import Link from "next/link"
import useAuthUser from "../hooks/useAuthUser"
import UserContext from "../context/UserContext"

export default function Header() {
    const userLogin = useAuthUser

    function UserMenu(userLogin) {
        if (userLogin.auth) {
            return <MenuSignIn />
        }
        return <MenuSignOut />
    }

    return (
        <header className={styles.header}>
            <Link href="/">
                <img
                    className={styles.header__logo}
                    src="https://i.imgur.com/f83h2PS.png"
                    alt="logo-tech-deal"
                />
            </Link>
        </header>
    )
}
