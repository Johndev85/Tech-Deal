import { useEffect, useState } from "react"
import CardItem from "../components/CardItem"
import styles from "./styles/results.module.scss"

export default function Results() {
    return (
        <section className={styles.results}>
            <CardItem />
        </section>
    )
}
