import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import styles from "./styles/cardItem.module.scss"

const DEFAULT_PLACEHOLDER_IMAGE = "https://i.imgur.com/XjSgyFR.png"

const CardItem = ({ product }) => {
    const poster =
        product.image_url === "N/A"
            ? DEFAULT_PLACEHOLDER_IMAGE
            : product.image_url
    return (
        <div className={styles.card}>
            <div className={styles.card__fav}>
                <FontAwesomeIcon
                    icon={faHeart}
                    className={styles.card__fav__icon}
                />
            </div>
            <div className={styles.card__img}>
            <a href={product.url}
                    target="_blank"
                    rel="noopener noreferrer">
                <img
                    alt={product.name.substr(0, 10)}
                    src={poster}
                />
                </a>
            </div>
            <div className={styles.card__details}>
            <a href={product.url}
                    target="_blank"
                    rel="noopener noreferrer">
                <h2>{product.name.substr(0, 32)}</h2>
            </a>
                <h3>
                    {/* <span>Rating:</span> {product.rating} */}
                </h3>
            </div>
            <div className={styles.card__button}>
                <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {product.price} $
                </a>
            </div>
        </div>
    )
}

export default CardItem
