
import Link from 'next/link'
import styles from '../components/styles/header.module.scss'

export default function Header () {


  return (
    <header className={styles.header}>
      <Link href='/'>
      <img
        className={styles.header__logo}
        src="https://i.imgur.com/f83h2PS.png"
        alt="logo-tech-deal"
      />
      </Link>
      <nav className={styles.header__menu}>

        <Link href="/register">
        <a >Register</a>
        </Link>

        <Link href="/login">
        <a >Login</a>
        </Link>


      </nav>
    </header>
  )
}
