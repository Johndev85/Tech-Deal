
import styles from "../styles/register.module.scss"
import HeaderNotRegister from '../components/HeaderNotRegister'
import Footer from '../components/Footer'
import Link from 'next/link'
import UserService from "../services/UsersService"



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
            Email: "",
            Password: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log(values)
            UserService.login(values)
              .then((response) => {
                console.log(response.data.error)
              })
              .catch((error) => {
                console.log(error)
              })
          }}
        >
          <Form action="" className={styles.register__form}>

            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage
              name="Email"
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
