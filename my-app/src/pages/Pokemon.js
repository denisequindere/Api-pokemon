import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Pokemon() {

    let [pokeData,setPokeData] = useState()
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
        {
            pokeData && 
            pokeData.map((pokemon) => <p style={{margin:30,color:"black"}} key={pokemon.name}>{pokemon.name}</p>,
            (pokemon) => <img src={`${pokemon.url}`} key={pokemon.url}></img>)  
            
        }
        <h1> Post com o pokemon número: {id}</h1>
       
        <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} >
        </img>
      </div>
        
        
       
    )

}
export default Pokemon