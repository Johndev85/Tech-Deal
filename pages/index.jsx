import Layout from "../components/Layout"
import SearchBar from "../components/SearchBar"
import Results from "../components/Results"
import styles from "../styles/app.module.scss"

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(
        `http://161.35.124.63:3000/api/maestro/type/breakfast`
    )
    const data = await res.json()
    console.log(data)

    // Pass data to the page via props
    return { props: data }
}

function App({ props }) {
    return (
        <Layout>
            <section className={styles.searchContainer}>
                <h1 className={styles.searchContainer__title}>
                    The Best Tech Offers For you
                </h1>
                <h2 className={styles.searchContainer__subTitle}>
                    Online price and offers comparator
                </h2>
                <SearchBar />
                <Results />
            </section>
        </Layout>
    )
}

export default App
