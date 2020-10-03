import styles from "../styles/register.module.scss"
import Header from "../components/HeaderNotRegister"
import Footer from "../components/Footer"
import Link from "next/link"
import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useState } from "react"
import UserService from "../services/UsersService"

const formSchema = Yup.object().shape({
    UserName: Yup.string()
        .required("Required field")
        .max(25, "Maximum 25 characters"),
    LastName: Yup.string()
        .required("Required field")
        .max(25, "Maximum 25 characters"),
    Email: Yup.string()
        .required("Invalid email")
        .max(255, "Maximum 255 characters"),
    Password: Yup.string()
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
    const [submitted, setSubmitted] = useState(false)

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
                        Email: "",
                        Password: "",
                        UserName: "",
                        LastName: "",
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values) => {
                        
                        const isChecked = document.getElementById("cbox1")
                        .checked
                        if (isChecked) {
                            setDataUser(values )
                            console.log(dataUser)
                            UserService.create(dataUser)
                                .then((response) => {
                                    dataUser({
                                        email: response.values.email,
                                        password: response.values.password,
                                        name: response.values.name,
                                        lastname: response.values.lastname,
                                    })
                                    setSubmitted(true)
                                    console.log(response.message)
                                    console.log(dataUser)
                                })
                                .catch((error) => {
                                    console.log(error.message)
                                })
                        } else {
                            alert('It is required to accept the terms of use')
                        }
                    }}
                >
                    <Form className={styles.register__form}>
                        <Field type="text" name="UserName" placeholder="Name" />
                        <ErrorMessage
                            name="UserName"
                            component="span"
                            className={styles.register__form__messageError}
                        />
                        <Field
                            type="text"
                            name="LastName"
                            placeholder="Last Name"
                        />
                        <ErrorMessage
                            name="LastName"
                            component="span"
                            className={styles.register__form__messageError}
                        />

                        <Field type="email" name="Email" placeholder="Email" />
                        <ErrorMessage
                            name="Email"
                            component="span"
                            className={styles.register__form__messageError}
                        />

                        <Field
                            type="password"
                            name="Password"
                            placeholder="Password"
                        />
                        <ErrorMessage
                            name="Password"
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
