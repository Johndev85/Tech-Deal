import Layout from '../../components/Layout'
import ProductCard from '../../components/ProductCard'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCog} from "@fortawesome/free-solid-svg-icons"
import styles from '../../styles/user.module.scss'

export default function User () {
  return (
    <Layout>
      <main className={styles.favContainer}>
        <div className={styles.title}>
          <h2>Favorites</h2>
        </div>
        <section className={styles.productsContainer}>
          <ProductCard
            productName="productName"
            photoURL="https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/ipadair-silver-wifi_1.jpg"
          />
          <ProductCard
            productName="productName"
            photoURL="https://falabella.scene7.com/is/image/FalabellaCO/4126654_1?wid=800&hei=800&qlt=70"
          />
          <ProductCard
            productName="productName"
            photoURL="https://exitocol.vtexassets.com/arquivos/ids/548642/smartwatch-reloj-inteligente-sumergible-control-musica-rosa.jpg?v=637012391578770000"
          />
          <ProductCard
            productName="productName"
            photoURL="https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/soundlink_around_ear_wireless_ii_hr14_1.jpg"
          />
          <ProductCard
            productName="productName"
            photoURL="https://falabella.scene7.com/is/image/FalabellaCO/4126654_1?wid=800&hei=800&qlt=70"
          />
        </section>
      </main>
      <section className={styles.container}>
        <div className={styles.container__title}>
          <h2>Change Password</h2>
          <h3>Hello $USERNAME!!!</h3>
          <div className={styles.container__pass}>
            <input type="text" placeholder="Old password..." />
          </div>
          <div className={styles.container__pass}>
            <input type="text" placeholder="New password..." />
          </div>
          <button className={styles.container__btn}>Save</button>
        </div>
      </section>
    </Layout>
  )
}
