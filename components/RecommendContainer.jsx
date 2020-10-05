import CardItem from '../components/CardItem'
import UserService from "../services/UsersService"
import {useState, useEffect} from 'react'

import styles from './styles/recommendContainer.module.scss'

export default function RecommendedContainer () {
  const [apiProducts, setApiProdutcs] = useState([])

  useEffect(() => {
    UserService.randomProducts()
    .then((response) => response)
    .then((apiResponse) => {
      console.log(apiResponse)
      setApiProdutcs(apiResponse.data.data)
    })
    .catch((error) => {
        console.log(error)
    })

  }, [])


  const products = apiProducts
  console.log(products)
  return (
    <>
      <div className={styles.title}>
        <h2>Recommended Products</h2>
      </div>
      <section className={styles.container}>
{      products.map((product, index) => {
              return <CardItem key={index} product={product} />
          })
}
      </section>
    </>
  )
}
