import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "../styles/allstores.module.scss"
import Head from "next/head"

export default function AllStores() {
    return (
        <>
            <Head>
                <title>All Stores - Tech Deal</title>
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

                    <h1> All stores</h1>

                    <ol>
                        <p>
                            Any information we get of a store is used for the
                            only purpose of comparing prices, we do not alter
                            that information and we have no influence over it as
                            well.
                        </p>
                        <li>
                            <p>
                                <a href="https://www.doto.com.mx">
                                    <img
                                        src="https://doto.vteximg.com.br/arquivos/asset-brand-doto.png?v=637261081787000000"
                                        alt="Doto ecommerce logo"
                                    />
                                </a>
                            </p>
                            <p>Doto allows to .....</p>
                        </li>
                        <li>
                            <p>
                                <a href="https://www.digitalife.com.mx">
                                    <img
                                        src="https://www.digitalife.com.mx/img/2/logo.png"
                                        alt="Digitalife ecommerce logo"
                                    />
                                </a>
                            </p>
                            <p>Digitallife allows to .....</p>
                        </li>
                        <li>
                            <p>
                                <a href="https://www.tecnowow.mx">
                                    <img
                                        src="https://www.tecnowow.mx/img/poderweb1712-logo-1505642671.jpg"
                                        alt="Tecnowow ecommerce logo"
                                    />
                                </a>
                            </p>
                            <p>Tecnowow allows to .....</p>
                        </li>
                    </ol>
                </section>
            </section>

            <Footer />
        </>
    )
}
