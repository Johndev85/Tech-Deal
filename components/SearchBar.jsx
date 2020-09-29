import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/searchBar.module.scss"
import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useState } from "react"

const formSchema = Yup.object().shape({
    SearchInput: Yup.string()
        .required("No terms to search...")
        .max(20, "20 max"),
})

export default function SearchBar({ search }) {
    const [keyWord, setKeyWord] = useState("")

    function onInputChange(e) {
        setKeyWord(e.target.value)
    }

    // const resetInputField = () => {
    //     setKeyWord("")
    // }

    const callSearchFunction = (e) => {
        e.preventDefault()

        if (keyWord.length !== 0) {
            search(keyWord)
            // resetInputField()
        }
    }

    return (
        <Formik
            initialValues={{
                SearchInput: "",
            }}
            validationSchema={formSchema}
        >
            <Form>
                <div className={styles.container}>
                    <FontAwesomeIcon
                        icon={faSearch}
                        className={styles.container__searchIcon}
                    />
                    <Field
                        className={styles.container__input}
                        value={keyWord}
                        onChange={onInputChange}
                        placeholder="Find your tech product..."
                        type="text"
                        name="SearchInput"
                        onSubmit={callSearchFunction}
                    />
                    <input
                        className={styles.container__searchBtn}
                        onClick={callSearchFunction}
                        type="submit"
                        value="Search"
                    />
                </div>
                <div className={styles.fieldError}>
                    {keyWord.length == 0 ? (
                        <ErrorMessage
                            name="SearchInput"
                            component="span"
                            className={styles.fieldError__message}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </Form>
        </Formik>
    )
}
