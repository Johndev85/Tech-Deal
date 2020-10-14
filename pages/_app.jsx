import "../styles/styles.scss"
import UserContext from "../context/UserContext"

export default function App({ Component, pageProps }) {
    return (
        <UserContext.Provider>
            <Component {...pageProps} />
        </UserContext.Provider>
    )
}
