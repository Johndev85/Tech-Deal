import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/cardItem.module.scss"

const DEFAULT_PLACEHOLDER_IMAGE = "https://i.imgur.com/XjSgyFR.png"

const CardItem = ({ product }) => {
    const poster =
        product.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : product.Poster
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img
                    src={product.thumbnail}
                    alt="jbl-tune-500bt"
                    src={poster}
                />
                <FontAwesomeIcon
                    icon={faHeart}
                    className={styles.card__img__icon}
                />
            </div>
            <div className={styles.card__details}>
                <h2>{product.Title}</h2>
                <span>des_type</span>
                <span>Plataform</span>
                <span>Rating</span>
            </div>
            <div className={styles.card__button}>
                <a href="#">Price</a>
            </div>
        </div>
    )
}

export default CardItem
