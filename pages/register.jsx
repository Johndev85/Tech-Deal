import styles from "../styles/register.module.scss"
import Header from "../components/HeaderNotRegister"
import Footer from "../components/Footer"
import Link from "next/link"
import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useState } from "react"
import UserService from "../services/UsersService"
// import {useRouter} from 'next/router'


const formSchema = Yup.object().shape({
    username: Yup.string()
        .required("Required field")
        .max(25, "Maximum 25 characters"),
    lastname: Yup.string()
        .required("Required field")
        .max(25, "Maximum 25 characters"),
    email: Yup.string()
        .required("Invalid email")
        .max(255, "Maximum 255 characters"),
    password: Yup.string()
        .required("Required field")
        .min(5, "Minimum  5 characters"),
})

export default function SignIn() {
    const initialDataUserState = {
        email: "",
        password: "",
        name: "",
        lastname: "",
    }
    const [dataUser, setDataUser] = useState(initialDataUserState)
    // const [submitted, setSubmitted] = useState(false)

    function register (values) {
        const isChecked = document.getElementById("cbox1")
        .checked
        if (isChecked) {
            setDataUser(values)
            console.log(dataUser)
            UserService.register(dataUser)
                .then((response) => {
                    // setSubmitted(true)
                    console.log(response.data.message)
                    console.log(response.data.error)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            alert('It is required to accept the terms of use')
        }
    }

    return (
        <>
            <Header />
            <section className={styles.register}>
                <h1>Register Now</h1>
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
                        username: "",
                        lastname: "",
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values) => { 
                        register(values)
                    }}
                >
                    <Form className={styles.register__form}>
                        <Field type="text" name="username" placeholder="Name" />
                        <ErrorMessage
                            name="username"
                            component="span"
                            className={styles.register__form__messageError}
                        />
                        <Field
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                        />
                        <ErrorMessage
                            name="lastname"
                            component="span"
                            className={styles.register__form__messageError}
                        />

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

                        <div className={styles.register__form__checkbox}>
                            <label>
                                <input type="checkbox" id="cbox1" />
                                <small>
                                    I have read the <span>Privacy Policy</span>{" "}
                                    and
                                    <span>Terms of Use.</span>
                                </small>
                            </label>
                        </div>
                        <button  type="submit">Create Account</button>
                        
                    </Form>
                </Formik>

                <div className={styles.register__bottom}>
                    <span>Are you already registered?</span>

                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    )
}
