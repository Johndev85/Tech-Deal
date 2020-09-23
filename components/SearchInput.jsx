import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/searchInput.module.scss"

export default function SearchInput() {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon
                icon={faSearch}
                className={styles.container__searchIcon}
            />
            <input type="text" placeholder="Search..." />
            <a href="#">Search</a>
        </div>
    )
}
