import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "../styles/aboutus.module.scss"
import Head from "next/head"

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About Us - Tech Deal</title>
            </Head>
            <Header />
            <section className={styles.main__container}>
                <section className={styles.container}>
                    <div className={styles.container__left}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className={styles.container__left__icon}
                        />

                        <Link href="/">
                            <a>Back to Home</a>
                        </Link>
                    </div>

                    <h1> About us</h1>

                    <ol>
                        <p>
                            We compile and compare prices so anyone using
                            TechDeal gets a better perspective while buying an
                            electronic product.
                        </p>
                    </ol>
                </section>
            </section>
            <Footer />
        </>
    )
}
