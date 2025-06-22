import { useState, useEffect  } from "react"
import styles from "./Searcher.module.scss"
import ListContainer from "../ListContainer/ListContainer"
import Loader from "../Loader/Loader";
import Arrows from "../Arrows/Arrows";



const Searcher = () => {

    const [ pokemons, setPokemons] = useState([]);
    const [ singlePokemonName, setSinglePokemonName ] = useState("");
    const [ inputValue, setInputValue ] = useState("");
    const [ isLoading, setIsLoading] = useState(true);
    const [ limit, setLimit ] = useState(12)
    const [ offset, setOffset ] = useState(0)
    // const [ types, setTypes ] = useState([]);
    // const [ typeToSearch, setTypeToSearch ] = useState("")
    // const API_BY_TYPE = `https://pokeapi.co/api/v2/type/`

    function handleSearch() {
        setSinglePokemonName(inputValue)
    };

    useEffect(() => {
        if (pokemons.length > 0) {
            setTimeout(() => {
                setIsLoading(false);
            }, 5000)
        }
    }, [pokemons]);

    function handleNextPage(){
        console.log("Next");
        setOffset(() => offset + 12)
    }

    function handlePrevPage(){
        console.log("Prev");
        if( offset > 0 ) {
            setOffset(() => offset - limit)
        }
    }

    // useEffect(() => {

    //     if(!types) return

    //     async function getPokemonsTypes() {

    //         try {
    //             let response = await fetch(API_BY_TYPE);
    //             if( !response.ok ) {
    //                 throw new Error('No se encuentraron Pokemons con el tipo ingresado')
    //             }

    //             let data = await response.json()
    //             setTypes(data.results)

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     getPokemonsTypes()

    // },[])

    // useEffect(() =>{
    //     if(!typeToSearch) return

    //     const getPokemonsByType = async () => {
    //         setIsLoading(true)
    //         let newPokemons = []
    //         try {
    //             let response = await fetch(`${API_BY_TYPE}${typeToSearch}`)

    //             if(!response.ok){
    //                 throw new Error("Error en la peticion de pokemons por categoria")
    //             }

    //             let data = await response.json();

    //             for (const element of data.pokemon) {
    //                 newPokemons.push(element.pokemon)
    //             }
                
    //             setPokemons(newPokemons);

    //         } catch (error) {
    //             console.log(error);
                
    //         }
    //     }

    //     getPokemonsByType() 
    // },[typeToSearch])


    useEffect(() => {

         if (!singlePokemonName) return; // ⛔ si está vacío, salta el fetch

         const getPokemonByName = async () => {
            setIsLoading(true)
            const API_URL_BY_NAME = `https://pokeapi.co/api/v2/pokemon/${singlePokemonName}`;


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
            }

        }

        getPokemonByName()

    },[singlePokemonName])



    useEffect(() => {
        
        const fetchData = async () => {
            const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
            console.log(API_URL);
            
            try {
                let response = await fetch(API_URL)

                if( !response.ok ){
                    throw new Error("Error En la peticion....")
                }

                let data = await response.json()
                setPokemons(data.results);
                
            } catch (error) {
                console.log(error)
            }
        }


        fetchData()
    },[limit, offset])

    
    return(
        <>
            <section className={ styles.searcher }>
                <h1 className={styles.title}>Pokédex</h1>
                <input
                    type="text"
                    placeholder="Search Pokémon"
                    onChange={(e) => setInputValue(e.target.value)}
                />

                {/* <select 
                    onChange={(e)=>{setTypeToSearch(e.target.value)}}
                >
                    <option selected disabled>Select a type</option>
                    {
                        types.map( (type, index ) => (
                            <option key={index} value={type.name}>{type.name}</option>
                        ))
                    }
                </select> */}

                <button
                    onClick={handleSearch}
                >Search</button>
                {/* <div className={styles.type}>
                <button
                    // onClick={handleSearchByType}
                    className={styles.typeBtn}
                >Type</button>
                </div> */}
            </section>

            { isLoading ? <Loader /> : <ListContainer results={pokemons} />}

            <Arrows onPrev={handlePrevPage} onNext={handleNextPage} ></Arrows>
        </>
    )
}


export default Searcher