import Link from "next/link"

import styles from "../components/styles/header.module.scss"

export default function MenuSignOut() {
    return (
        <nav className={styles.header__menu}>
            <Link href={"./register"}>
                <a>Register</a>
            </Link>

            <Link href={"./login"}>
                <a>Log In</a>
            </Link>
        </nav>
    )
}
