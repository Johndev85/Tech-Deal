import Layout from "../components/Layout"
import SearchInput from "../components/SearchInput"
import CardItem from "../components/CardItem"

import styles from "../styles/home.module.scss"

export default function App() {
    return (
        <Layout>
            <section className={styles.searchContainer}>
                <h1>The Best Tech Offers For you</h1>
                <h2>Online price and offers comparator</h2>
                <SearchInput />
            </section>
            <section className={styles.results}>
                <CardItem />
            </section>
        </Layout>
    )
}
