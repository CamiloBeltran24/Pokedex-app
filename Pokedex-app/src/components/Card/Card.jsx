import { useState, useEffect } from "react";
import styles from "./Card.module.scss"
const Card = ({ pokemons }) => {
    const [ currentPokemons, setCurrentPokemons ] = useState([]);

    console.log({pokemons})
    useEffect(() => {

        const fetchPokemonInfo = async () => {
            let results = [];
            if( pokemons[0].url) {
                for (let pokemon of pokemons) {
                    
                    try {
                        const response = await fetch( pokemon.url )
                        const data = await response.json()
                        results.push(data)
    
                    } catch (error) {
                        console.log(error);
                    }
    
                }

            } else {
                results = pokemons;
            }
            setCurrentPokemons(results)
        }

        fetchPokemonInfo ()
    }, [pokemons])

console.log({currentPokemons});

    return(
        <>
            {
                currentPokemons.map( (pokemon, index) => (
                    <div key={index} className={styles.card}>
                        <span className={styles.id}># {pokemon.id}</span>
                        <figure>
                            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
                        </figure>
                        <h2 className={styles.card__name}>{pokemon.name}</h2>
                        
                    </div>
                ))
            }

        </>
    )
}

export default Card