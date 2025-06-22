import { useState, useEffect  } from "react"
import styles from "./Searcher.module.scss"
import ListContainer from "../ListContainer/ListContainer"



const Searcher = () => {

    const [ pokemons, setPokemons] = useState([]);
    const [ singlePokemonName, setSinglePokemonName ] = useState("");
    const [ inputValue, setInputValue ] = useState("");
    const [ isFirstLoading, setIsFirstLoading] = useState(true)

    const handleSearch = () => {
        setSinglePokemonName(inputValue)
    };

    useEffect(() => {

         if (!singlePokemonName) return; // ⛔ si está vacío, salta el fetch

        const getPokemonByName = async () => {
            const API_URL_BY_NAME = `https://pokeapi.co/api/v2/pokemon/${singlePokemonName}`;

            console.log(API_URL_BY_NAME);


            try {
                let response = await fetch(API_URL_BY_NAME);
                if( !response.ok ){
                    throw new Error("Error obteniendo el pokemon por nombre...")
                }

                let data = await response.json();
                let pokemonsArray = [data]
                setPokemons(pokemonsArray);


            } catch (error) {
                console.log(error)
            } finally {
                setIsFirstLoading(false)
            }

        }

        getPokemonByName()

    },[singlePokemonName])



    useEffect(() => {
        const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0";

        const fetchData = async () => {
            try {
                let response = await fetch(API_URL)

                if( !response.ok ){
                    throw new Error("Error En la peticion....")
                }

                let data = await response.json()
                setPokemons(data.results);

            } catch (error) {
                console.log(error)
            } finally {
                setIsFirstLoading(true)
            }
        }


        fetchData()
    },[])

    return(
        <>
            <section className={ styles.searcher }>
                <h1 className={styles.title}>Pokédex</h1>
                <input
                    type="text"
                    placeholder="Search Pokémon"
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <button
                    onClick={handleSearch}
                >Search</button>
            </section>

            <ListContainer results={pokemons} firstLoading={isFirstLoading}></ListContainer>
        </>
    )
}


export default Searcher