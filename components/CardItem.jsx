import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/cardItem.module.scss"

const DEFAULT_PLACEHOLDER_IMAGE = "https://i.imgur.com/XjSgyFR.png"

const CardItem = ({ product }) => {
    const poster =
        product.imageUrl === "N/A"
            ? DEFAULT_PLACEHOLDER_IMAGE
            : product.imageUrl
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img
                    src={product.imageUrl}
                    alt={product.title.substr(0, 14)}
                    src={poster}
                />
                <FontAwesomeIcon
                    icon={faHeart}
                    className={styles.card__img__icon}
                />
            </div>
            <div className={styles.card__details}>
                <h2>{product.title.substr(0, 15)}</h2>
                <span>des_type</span>
                <span>{product.rating}</span>
            </div>
            <div className={styles.card__button}>
                <a href="#">{product.price}</a>
            </div>
        </div>
    )
}

export default CardItem
