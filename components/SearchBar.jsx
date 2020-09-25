import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/searchInput.module.scss"
import { useState } from "react"

export default function SearchBar() {
    const [keyWord, setKeyWord] = useState({})

    function onInputChange(e) {
        setKeyWord({ keyword: e.target.value })
        console.log(keyWord)
    }

    return (
        <div className={styles.container}>
            <FontAwesomeIcon
                icon={faSearch}
                className={styles.container__searchIcon}
            />
            <input
                type="text"
                onChange={onInputChange}
                placeholder="Find your product..."
            />
            <a href="#">Search</a>
        </div>
    )
}
