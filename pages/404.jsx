import styles from '../styles/404.module.scss'
import Link from 'next/link'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"


export default function Custom404 () {

    return <>
    <div className={styles.container}>
        <div className={styles.container__left}>
              <div >
                <img className={styles.container__left__logo__img} src="https://i.imgur.com/f83h2PS.png" alt="logo-tech-deal"/>
              </div>
              <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={styles.container__left__icon}
                        />
          
              <Link href='/'>
              <a >Back to Home</a>
              </Link>
        </div>
      <div className={styles.container__right}>
        <h1>404 - Page Not Found</h1>
        <img src="/images/404.png" alt="404-img"/>
        <h2>SORRY, we could not find that page.</h2>
      </div>
  </div>
  <Footer />
  </>
}
