import Head from "next/head"
import Header from "./Header"
import RecommendedContainer from "./RecommendContainer"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Home - Tech Deal</title>
                <meta charSet="UTF-8" />
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
