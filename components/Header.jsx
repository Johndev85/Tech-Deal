import Modal from "react-modal"
import Register from "../pages/register"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

import styles from "../components/styles/header.module.scss"

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
}

Modal.setAppElement("#__next")

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false)

    function openModal() {
        setModalOpen(true)
    }

    function closeModal() {
        setModalOpen(false)
    }

    const {
        query: { id },
    } = useRouter()

    return (
        <header className={styles.header}>
            <img
                className={styles.header__logo}
                src="https://i.imgur.com/f83h2PS.png"
                alt="logo-tech-deal"
            />
            <nav className={styles.header__menu}>
                <Link href="">
                    <a>Categories</a>
                </Link>
                <a href="">Favorites</a>
                <img
                    className={styles.header__menu__userImg}
                    src="/images/user.svg"
                    alt="user-icon"
                />
                <Link href={`/user/${id}`}>
                    <a>User</a>
                </Link>

                <button onClick={openModal}>Register</button>
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Register"
                >
                    <button onClick={closeModal}>X</button>
                    <Register />
                </Modal>
            </nav>
        </header>
    )
}
