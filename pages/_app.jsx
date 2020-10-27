import "../styles/styles.scss"
import { UserContextProvider } from "../context/UserContext"

export default function App({ Component, pageProps }) {
    return (
        <UserContextProvider>
            <Component {...pageProps} />
        </UserContextProvider>
    )
}
