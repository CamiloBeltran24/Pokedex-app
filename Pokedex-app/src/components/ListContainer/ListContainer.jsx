import { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./ListContainer.module.scss"
import Loader from "../Loader/Loader";

const ListContainer = ({ children, results, loading }) => {

    const [ isLoading, setIsLoading] = useState(true)

    return(
        <>
            <section className={styles.pokemons_container}>
                <Card pokemons={results}></Card>
            </section>
        </>
    )
}

export default ListContainer