import HeaderNotRegister from '../components/HeaderNotRegister'
import Footer from '../components/Footer'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import styles from '../styles/allstores.module.scss'

export default function PrivacyPolicy() {

    return (
        <>
            <HeaderNotRegister />
            <section className={styles.container}>

                <div className={styles.container__left}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={styles.container__left__icon}
                    />

                    <Link href='/'>
                        <a >Back to Home</a>
                    </Link>
                </div>

                <h1> All stores</h1>

                    <ol>
                        <p>
                                Any information we get of a store is used for the only purpose of comparing prices, we do not alter that information and we have no influence over it as well.
                        </p>
                    </ol>
            </section>
            <Footer />
        </>
    )
}