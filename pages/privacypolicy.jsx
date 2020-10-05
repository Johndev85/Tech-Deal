import HeaderNotRegister from "../components/HeaderNotRegister"
import Footer from "../components/Footer"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import styles from "../styles/privacypolicy.module.scss"

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

                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </div>

                <h1> Privacy Polity</h1>

                <ol>
                    <li>
                        <p>
                            Contact of those responsible and of the data
                            protection delegates Tech Deal (from now on also
                            known as <span>Tech Deal </span> offers you the
                            possibility of using different services on our{" "}
                            <span>Tech Deal </span> website for free. We are the
                            entity responsible for the data for the purposes of
                            the General Regulation for Data Protection (RGPD).
                            Below, we inform you in detail about the personal
                            data we collect when you use our website, as well as
                            the purpose for which we use it.
                        </p>
                    </li>
                    <li>
                        <p>
                            <h3>Collection and processing of personal data </h3>
                            As a general rule, you can use idealo pages, for
                            which it is not necessary to pay or register,
                            without having to provide personal data. In some
                            cases we process the personal data that you will
                            find in section 3. We only do this when it is
                            necessary to activate a functional website, this is
                            an app, as well as our contents and services. Apart
                            from this we process personal data in connection
                            with the use of idealo, as long as you personally
                            provide it to us. For example, when you register,
                            participate in a contest, ask us a question or when
                            there is any other legal basis (see section 4).
                        </p>
                    </li>
                    <li>
                        <p>
                            <h3> Type of data processed</h3>
                            When you visit idealo.es or use one of our apps, our
                            system automatically records certain technical
                            information. These can be: Information about the
                            type and version of the browser Device operating
                            system Mobile device ID Date and time of access
                            Technical data of the web / Pseudonymized identity
                            (Cookie ID, Ad ID etc., see below) Websites from
                            where users reach us Websites that users visit from
                            our page Beyond this we also process the following
                            personal data, as long as a contractual relationship
                            is established between us or when you provide it to
                            us: Personal data (name, address, date of birth)
                            Contact details (phone number, email address)
                            Contractual data (type of contractual relationship,
                            interests on products, purchase history) Username
                            and password Payment details and bank details
                            Comments, messages in forums, etc.
                        </p>
                    </li>
                </ol>
            </section>
            <Footer />
        </>
    )
}
