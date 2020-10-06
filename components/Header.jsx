import MenuSignIn from "../components/MenuSignIn"
import MenuSignOut from "../components/MenuSignOut"

import styles from "../components/styles/header.module.scss"

export default function Header() {
    function UserMenu(props) {
        const isAuth = props.isAuth
        if (isAuth) {
            return <MenuSignIn />
        }
        return <MenuSignOut />
    }

    return (
        <header className={styles.header}>
            <img
                className={styles.header__logo}
                src="https://i.imgur.com/f83h2PS.png"
                alt="logo-tech-deal"
            />

            <UserMenu isAuth={false} />
        </header>
    )
}
