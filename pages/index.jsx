import Header from "../components/Header"
import SearchInput from "../components/SearchInput"
import RecommendedContainer from "../components/RecommendContainer"
import Footer from "../components/Footer"

import styles from "../styles/home.module.scss"

export default function App() {
    return (
        <>
            <Header />
            <section className={styles.searchContainer}>
                <h1>The Best Tech Offers For you</h1>
                <h2>Online price and offers comparator</h2>
                <SearchInput />
            </section>
            <RecommendedContainer />
            <Footer />
        </>
    )
}
