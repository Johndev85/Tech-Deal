
import styles from "../styles/register.module.scss"
import HeaderNotRegister from '../components/HeaderNotRegister'
import Footer from '../components/Footer'
import Link from 'next/link'
import UserService from "../services/UsersService"
import { useState } from 'react'

import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik"


const formSchema = Yup.object().shape({
  Email: Yup.string()
    .required("Invalid email")
    .max(255, "Maximum 255 characters"),
  Password: Yup.string()
    .required("Required field")
    .min(5, "Minimum  5 characters"),
})

export default function Login() {

    const [userToken, setUserToken] = useState(null)
    const [isAuth, setIsAuth] = useState(true)
    

    function isLogged () {
        if (userToken !== null) {
            setIsAuth(true)
        }
        return [isAuth, userToken]
    }

    return (

        <>
        <HeaderNotRegister />
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
                    console.log(values)
                    UserService.login(values)
                        .then((response) => {

                            setUserToken(response.data.token)
                            isLogged()
                                })
                        .catch((error) => {
                            error === 401 && (
                                alert('user no found')
                            )

                        })
                }}
            >
                <Form action="" className={styles.register__form}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
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
          <Link href='/register'>
            <a>
              Register
                </a>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
