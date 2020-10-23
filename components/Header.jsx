import styles from "../components/styles/header.module.scss"
import MenuSignIn from "../components/MenuSignIn"
import MenuSignOut from "../components/MenuSignOut"
import Link from "next/link"
import Context from "../context/UserContext"

export default function Header() {
    return (
        <Context.Consumer>
            {(auth) => (
                <header className={styles.header}>
                    <Link href="/">
                        <img
                            className={styles.header__logo}
                            src="https://i.imgur.com/f83h2PS.png"
                            alt="logo-tech-deal"
                        />
                    </Link>
                    {auth ? <MenuSignIn /> : <MenuSignOut />}
                </header>
            )}
        </Context.Consumer>
    )
}
