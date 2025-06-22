
import Card from "../Card/Card";
import styles from "./ListContainer.module.scss"

const ListContainer = ({ children, results, firstLoading }) => {

    return(
        <>
            <section className={styles.pokemons_container}>
                <Card pokemons={results}></Card>
            </section>
        </>
    )
}

export default ListContainer