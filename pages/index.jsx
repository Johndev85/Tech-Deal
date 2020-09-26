import styles from "../styles/app.module.scss"
import Layout from "../components/Layout"
import SearchBar from "../components/SearchBar"
import CardItem from "../components/CardItem"

import { useReducer, useEffect, useState } from "react"

const API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"

const initialState = {
    loading: true,
    products: [],
    errorMessage: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_PRODUCT_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null,
            }
        case "SEARCH_PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        case "SEARCH_PRODUCT_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error,
            }
        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    // useEffect(() => {
    //     fetch(API_URL)
    //         .then((response) => response.json())
    //         .then((jsonResponse) => {
    //             dispatch({
    //                 type: "SEARCH_PRODUCT_SUCCESS",
    //                 payload: jsonResponse.Search,
    //             })
    //         })
    // }, [])

    const search = (keyWord) => {
        dispatch({
            type: "SEARCH_PRODUCT_REQUEST",
        })

        fetch(`https://www.omdbapi.com/?s=${keyWord}&apikey=4a3b711b`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (jsonResponse.Response === "True") {
                    dispatch({
                        type: "SEARCH_PRODUCT_SUCCESS",
                        payload: jsonResponse.Search,
                    })
                } else {
                    dispatch({
                        type: "SEARCH_PRODUCT_FAILURE",
                        error: jsonResponse.Error,
                    })
                }
            })
    }

    const { products, errorMessage, loading } = state

    return (
        <Layout>
            <section className={styles.searchContainer}>
                <h1 className={styles.searchContainer__title}>
                    The Best Tech Offers For you
                </h1>
                <h2 className={styles.searchContainer__subTitle}>
                    Online price and offers comparator
                </h2>
                <SearchBar search={search} />
                <section className={styles.searchContainer__results}>
                    {loading && !errorMessage ? (
                        <span>loading... </span>
                    ) : errorMessage ? (
                        <div className="errorMessage">{errorMessage}</div>
                    ) : (
                        products.map((product, id) => (
                            <CardItem
                                key={`${id}-${product.title}`}
                                product={product}
                            />
                        ))
                    )}
                </section>
            </section>
        </Layout>
    )
}

export default App
