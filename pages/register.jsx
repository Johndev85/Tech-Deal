import Link from 'next/link'
import styles from '../styles/register.module.scss'

export default function Register () {
  return (
    <section className={styles.register}>
      <h1>Register Now</h1>
      <h2>To be able to use all the favorite fuctions</h2>
      <ul>
        <li>Save your favorite products permanently</li>
        <li>Compare multiple products</li>
        <li>Do not miss the best prices</li>
      </ul>

      <form action="" className={styles.register__form}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Last Name" />

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className={styles.register__form__checkbox}>
          <label>
            <input type="checkbox" id="cbox1" />
            <small>
                            I have read the <span>Privacy Policy</span> and
              <span>Terms of Use.</span>
            </small>
          </label>
        </div>
        <button>Create Account</button>
      </form>
      <div className={styles.register__bottom}>
        <span>Are you already registered?</span>
        <Link href="">
          <a>Log In</a>
        </Link>
      </div>
    </section>
  )
}
