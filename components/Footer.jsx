import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

import styles from "../components/styles/footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__top}>
                <div className={styles.footer__top__general}>
                    <h4>General</h4>
                    <ul>
                        <li>
                            <Link href="/aboutus">
                                <a>About us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/allstores">
                                <a>All Stores</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/termsofuse">
                                <a>Terms of Use</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacypolicy">
                                <a>Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__top__general}>
                    <h4>Help</h4>
                    <ul>
                        <li>
                            <a tabIndex="0">FAQ</a>
                        </li>
                        <li>
                            <a tabIndex="0">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footer__top__social}>
                    <h4>Follow us</h4>
                    <ul className={styles.footer__top__social__list}>
                        <li>
                            <a tabIndex="0">
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className={
                                        styles.footer__top__social__list__icons
                                    }
                                />
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li tabIndex="0">
                            <a tabIndex="0">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className={
                                        styles.footer__top__social__list__icons
                                    }
                                />
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a tabIndex="0">
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className={
                                        styles.footer__top__social__list__icons
                                    }
                                />
                                <span>Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <div className={styles.footer__bottom}>
                <span>Tech Deal -2020</span>
            </div>
        </footer>
    )
}
