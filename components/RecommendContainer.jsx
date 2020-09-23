import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import { faHeadphones } from "@fortawesome/free-solid-svg-icons"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/recommendContainer.module.scss"

export default function RecommendedContainer() {
    return (
        <section className={styles.container}>
            <div className={styles.container__box}>
                <FontAwesomeIcon
                    icon={faMobileAlt}
                    className={styles.container__box_icon}
                />
                <h3>Smart phones</h3>
            </div>
            <div className={styles.container__box}>
                <FontAwesomeIcon
                    icon={faDesktop}
                    className={styles.container__box_icon}
                />
                <h3>Computers</h3>
            </div>
            <div className={styles.container__box}>
                <FontAwesomeIcon
                    icon={faHeadphones}
                    className={styles.container__box_icon}
                />
                <h3>Electronics</h3>
            </div>
            <div className={styles.container__box}>
                <FontAwesomeIcon
                    icon={faGamepad}
                    className={styles.container__box_icon}
                />
                <h3>Consoles</h3>
            </div>
        </section>
    )
}
