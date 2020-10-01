import styles from "../components/styles/header.module.scss"
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <img
                className={styles.header__logo}
                src="https://i.imgur.com/f83h2PS.png"
                alt="logo-tech-deal"
            />

            <nav className={styles.header__menu}>
                <Link href=""><a>Categories</a></Link>
                <a href="">Favorites</a>
                <img
                    className={styles.header__menu__userImg}
                    src="/images/user.svg"
                    alt="user-icon"
                />
                <Link href="/user"><a>User</a></Link>
            </nav>
        </header>
    )
}
