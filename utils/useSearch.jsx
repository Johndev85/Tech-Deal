import { useState, useEffect } from "react"

function useSearch({ url }) {
    const [items, setItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])
    return [items, isLoaded, error]
}

export default useSearch
