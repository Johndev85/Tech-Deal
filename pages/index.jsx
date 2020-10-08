import Layout from "../components/Layout"
import App from "./app"
import UserContext from "../context/UserContext"
const HomePage = () => {
    return (
        <UserContext.Provider>
            <Layout>
                <App />
            </Layout>
        </UserContext.Provider>
    )
}

export default HomePage
