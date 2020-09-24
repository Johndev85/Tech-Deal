import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import styles from "../components/styles/footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__top}>
                <div className={styles.footer__top__general}>
                    <h4>General</h4>
                    <ul>
                        <li>About us</li>
                        <li>All Stores</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className={styles.footer__top__general}>
                    <h4>Help</h4>
                    <ul>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className={styles.footer__top__social}>
                    <h4>Follow us</h4>
                    <ul className={styles.footer__top__social__list}>
                        <li>
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className={
                                    styles.footer__top__social__list__icons
                                }
                            />
                            <span>Facebook</span>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className={
                                    styles.footer__top__social__list__icons
                                }
                            />
                            <span>Instagram</span>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className={
                                    styles.footer__top__social__list__icons
                                }
                            />
                            <span>Twitter</span>
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
