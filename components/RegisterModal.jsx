import styles from "./styles/register.module.scss"

export default function Register() {
    return ReactDOM.createPortal(
        <section className={styles.register}>
            <h1>Register Now</h1>
            <h2>To be able to use all the favorite fuctions</h2>
            <ul>
                <li>Save your favorite products permanently</li>
                <li>Compare multiple products</li>
                <li>Do not miss the best prices</li>
            </ul>

            <form action="" className={styles.register__form}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <div className={styles.register__form__checkbox}>
                    <label>
                        {" "}
                        <input type="checkbox" name="" id="cbox1" />
                        <small>
                            I have read the <span>Privacy Policy</span> and
                            <span>Terms of Use.</span>
                            I give my permission for Tech Deal to send me
                            commercial information by email based <br />
                            on my interests. I can revoke this consent at any
                            time.
                        </small>
                    </label>
                </div>
                <button>Create Account</button>
            </form>
            <div className="register__bottom">
                <span>¿Still not registered?</span>
                <a href="">Sign up</a>
            </div>
            {props.children}
        </section>
    )
}
