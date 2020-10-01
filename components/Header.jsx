import Modal from "../components/Modal"

import RegisterModal from "../components/RegisterModal"

import styles from "../components/styles/header.module.scss"

export default function Header() {
    return (
        <header className={styles.header}>
            <img
                className={styles.header__logo}
                src="https://i.imgur.com/f83h2PS.png"
                alt="logo-tech-deal"
            />

            <nav className={styles.header__menu}>
                <a href="">Categories</a>
                <a href="">Favorites</a>
                <img
                    className={styles.header__menu__userImg}
                    src="/images/user.svg"
                    alt="user-icon"
                />
                <button>Register</button>
            </nav>
        </header>
    )
}
