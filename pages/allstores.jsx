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
                            <p>
                                Doto into their terms conditions, under the
                                Article 148 "fracción IV de la Ley Federal del
                                Derecho de Autor - MX", determinate that any use
                                of DOTO eCommerce information is under that
                                article. The 148 Mexican Article allows
                                "reproduction parts of the work, for criticism
                                and scientific, literary or artistic research",
                                for that reason Tech Deal use as Educational
                                purpose the Doto App information locate into
                                their page.
                            </p>
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
                            <p>
                                Digitallife into their terms conditions, under
                                the Article 148 "fracción IV de la Ley Federal
                                del Derecho de Autor - MX", determinate that any
                                use of DIGITALIFE eCommerce information is under
                                that article. The 148 Mexican Article allows
                                "reproduction parts of the work, for criticism
                                and scientific, literary or artistic research",
                                for that reason Tech Deal use as Educational
                                purpose the Doto App information locate into
                                their page.
                            </p>
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
                            <p>
                                Tecnowow hasn´t into their restrictions anything
                                about to Educational purpose to use their app
                                products information, for that reason we use
                                thier ecommerce.
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="https://pcel.com/">
                                    <img
                                        src="https://images.pcel.com/static/data/pcel-logo.png"
                                        alt="PCEL ecommerce logo"
                                    />
                                </a>
                            </p>
                            <p>
                                PCEL hasn´t into their restrictions anything
                                about to Educational purpose to use their app
                                products information, for that reason we use
                                thier ecommerce
                            </p>
                        </li>
                    </ol>
                </section>
            </section>
            <Footer />
        </>
    )
}
