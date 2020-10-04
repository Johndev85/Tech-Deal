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
            <a href={product.url}
                target="_blank"
                rel="noopener noreferrer" >
                <div className={styles.card__fav}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={styles.card__fav__icon}
                    />
                </div>
                <div className={styles.card__img}>
                    <img
                        alt={product.name.substr(0, 10)}
                        src={poster}
                    />
                </div>
                <div className={styles.card__details}>
                    <h4>{product.name.substr(0, 31)}</h4>
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
            </a>
        </div>
    )
}

export default CardItem
