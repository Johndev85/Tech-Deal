import Layout from "../components/Layout"
import App from "./app"
import Context from "../context/UserContext"

const HomePage = () => {
    return (
        <Context.Provider>
            <Layout>
                <App />
            </Layout>
        </Context.Provider>
    )
}

export default HomePage
