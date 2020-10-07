import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

import styles from '../components/styles/footer.module.scss'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__top}>
        <div className={styles.footer__top__general}>
          <h4>General</h4>
          <ul>
            <Link href='/aboutus'>
            <li>About us</li>
            </Link>
            <Link href='/allstores'>
            <li>All Stores</li>
            </Link>
            <Link href='/termsofuse'>
            <li>Terms of Use</li>
            </Link>
            <Link href='/privacypolicy'>
            <li>Privacy Policy</li>
            </Link>
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
        <script defer id="io.birdseed.script-tag" type="text/javascript" src="https://cdn.birdseed.io/widget.js"></script>
        <div id="birdseed-widget-container" data-token="e5ea8448c4478f906ab6e063cab3ef17"></div>
      </section>
      <div className={styles.footer__bottom}>
        <span>Tech Deal -2020</span>
      </div>
    </footer>
  )
}
