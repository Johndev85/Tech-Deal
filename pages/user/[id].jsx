import Layout from "../../components/Layout"
import Favs from "../../components/Favs"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCog} from "@fortawesome/free-solid-svg-icons"
import styles from "../../styles/user.module.scss"

export default function User() {
    return (
        <Layout>
            <main className={styles.favContainer}>
                <div className={styles.title}>
                    <h2>Favorites</h2>
                </div>
                <section className={styles.productsContainer}>
                    <Favs />
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
