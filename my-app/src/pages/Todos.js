import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Todos() {

    let [pokeData,setPokeData] = useState('')
    const fetchPokemon = async() =>{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const data = await response.json()
        setPokeData(data.results)

    }
    useEffect(() =>{
        fetchPokemon()
    })
    let params = useParams()
    let {id} = params
    return(
      <div className="main">

        <h1>Pokemon</h1>
        {pokeData && 
                pokeData.map((pokemon, index) => {
                    return(
                        <> 
                            <p key={pokemon.name}>{pokemon.name}</p> 
                            <img  
                                alt={`Imagem do pokemon ${pokemon.name}`} 
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index + 1}.gif`}
                            ></img>
                        </>
                    )
                })
            }
        </div>
        
        
       
    )

}
export default Todos