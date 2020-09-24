import Head from "next/head"
import Header from "../components/Header"
import RecommendedContainer from "../components/RecommendContainer"
import Footer from "../components/Footer"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>title page</title>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Header />
            <main>{children}</main>
            <RecommendedContainer />
            <Footer />
        </>
    )
}
