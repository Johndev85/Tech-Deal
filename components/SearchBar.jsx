import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/searchBar.module.scss"
import { useState } from "react"

export default function SearchBar({ search }) {
    const [keyWord, setKeyWord] = useState("")

    function onInputChange(e) {
        setKeyWord(e.target.value)
    }

    const resetInputField = () => {
        setKeyWord("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        search(keyWord)
        resetInputField()
    }

    return (
        <form className={styles.container}>
            <FontAwesomeIcon
                icon={faSearch}
                className={styles.container__searchIcon}
            />
            <input
                className={styles.container__input}
                value={keyWord}
                onChange={onInputChange}
                placeholder="Find your tech product..."
                type="text"
            />
            <input
                className={styles.container__searchBtn}
                onClick={callSearchFunction}
                type="submit"
                value="Search"
            />
        </form>
    )
}
