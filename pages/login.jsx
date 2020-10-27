import styles from "../styles/register.module.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import useAthUser from "../hooks/useAuthUser"

import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useState } from "react"

const formSchema = Yup.object().shape({
    email: Yup.string()
        .required("Invalid email")
        .max(255, "Maximum 255 characters"),
    password: Yup.string()
        .required("Required field")
        .min(5, "Minimum  5 characters"),
})

export default function Login() {
    const [userLogin, setUserLogin] = useState(null)

    useAthUser(userLogin)

    return (
        <>
            <Header />
            <section className={styles.register}>
                <h1>Login Now</h1>
                <h2>To be able to use all the favorite fuctions</h2>
                <ul>
                    <li>Save your favorite products permanently</li>
                    <li>Compare multiple products</li>
                    <li>Do not miss the best prices</li>
                </ul>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values) => {
                        setUserLogin(values)
                    }}
                >
                    <Form className={styles.register__form}>
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage
                            name="email"
                            component="span"
                            className={styles.register__form__messageError}
                        />

                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <ErrorMessage
                            name="password"
                            component="span"
                            className={styles.register__form__messageError}
                        />

                        <button type="submit">Log In</button>
                    </Form>
                </Formik>

                <div className={styles.register__bottom}>
                    <span>Still no registred?</span>
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    )
}
