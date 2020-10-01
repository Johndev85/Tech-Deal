import Modal from 'react-modal'
import Register from '../pages/register'
import Login from '../pages/login'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import styles from '../components/styles/header.module.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

Modal.setAppElement('#__next')

export default function Header () {
  const [OpenRegister, setOpenRegister] = useState(false)
  const [OpenLogin, setOpenLogin] = useState(false)


  function openModalR () {
    setOpenRegister(true)
  }

  function openModalL () {
    setOpenLogin(true)
  }

  function closeModal () {
    if (OpenRegister === true || OpenLogin === true) {
      setOpenRegister(false)
      setOpenLogin(false)
    }
  }

  const {
    query: { id }
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

        <button onClick={openModalR}>Register</button>
        <button onClick={openModalL}>Login</button>

        <Modal
          isOpen={OpenRegister}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Register"
        >
          <button onClick={closeModal}>X</button>
          <Register />
        </Modal>
        <Modal
          isOpen={OpenLogin}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Login"
        >
          <button onClick={closeModal}>X</button>
          <Login />
        </Modal>

      </nav>
    </header>
  )
}
