import styles from "../styles/app.module.scss"
import LayoutNotRegister from "../components/LayoutNotRegister"
import LayoutRegister from "../components/LayoutRegister"
import SearchBar from "../components/SearchBar"
import CardItem from "../components/CardItem"
// import NotRegister from "./notRegister"
// import UserSigned from "./userSigned"
// import PrivatesRoutes from "../utils/privatesRoutes"
import Loader from "../components/Loader"
import UserService from "../services/UsersService"
import Provider from '../utils/Context'

import { useReducer } from "react"


const initialState = {
    load: false,
    products: [],
    errorMessage: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_PRODUCT_REQUEST":
            return {
                ...state,
                load: true,
                errorMessage: null,
            }
        case "SEARCH_PRODUCT_SUCCESS":
            return {
                ...state,
                load: false,
                products: action.payload,
                kWord: action.kWord,
                count: action.count,
            }
        case "SEARCH_PRODUCT_FAILURE":
            return {
                ...state,
                load: false,
                errorMessage: action.error,
            }
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const search = (keyWord) => {
        dispatch({
            type: "SEARCH_PRODUCT_REQUEST",
        })
        UserService.getProducts(keyWord)
            .then((response) => response)
            .then((apiRespose) => {
                dispatch({
                    type: "SEARCH_PRODUCT_SUCCESS",
                    payload: apiRespose.data.data,
                    kWord: keyWord,
                    count: apiRespose.data.count,
                })
            })
            .catch((error) => {
                console.log(error)
                dispatch({
                    type: "SEARCH_PRODUCT_FAILURE",
                    error: error.message,
                })
            })
    }

    const { products, errorMessage, load, kWord, count } = state

    function searching() {
        return (
            <section className={styles.searchContainer}>
                <h1 className={styles.searchContainer__title}>
                    The Best Tech Offers For you
                </h1>
                <h2 className={styles.searchContainer__subTitle}>
                    Online price and offers comparator
                </h2>
                <SearchBar search={search} />
                <section className={styles.searchContainer__results}>
                    {load && !errorMessage ? (
                        <span
                            className={styles.searchContainer__results__loading}
                        >
                            <Loader />
                        </span>
                    ) : errorMessage ? (
                        <div
                            className={styles.searchContainer__results__loading}
                        >
                            <span>{errorMessage}</span>
                        </div>
                    ) : Array.isArray(products) === true && count !== 0 ? (
                        products.map((product, index) => {
                            return <CardItem key={index} product={product} />
                        })
                    ) : (
                                    <div
                                        className={
                                            styles.searchContainer__results__notFound
                                        }
                                    >
                                        <p>
                                            No results for <span> {kWord} </span>{" "}
                                        </p>
                                        <p>
                                            Check your spelling or use more general terms.
                            </p>
                                    </div>
                                )}
                </section>
            </section>
        )
    }

    function NotRegister() {
        return (
            <>
                <LayoutNotRegister>{searching()}</LayoutNotRegister>
            </>
        )
    }

    function UserRegister() {
        return (
            <>
                <LayoutRegister>{searching()}</LayoutRegister>
            </>
        )
    }

    function Greeting(props) {
        const isAuth = props.isAuth
        if (isAuth) {
            return <UserRegister />
        }
        return <NotRegister />
    }

    return <>
    <Provider> 
        <Greeting  />
    </Provider> 
    </> 
}

export default App
