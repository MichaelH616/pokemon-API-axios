import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeList = () => {
    
    const [pokeData, setpokeData] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{setpokeData(response.data.results)})
        .catch((err) => console.log(err));
    }, []);

  return (
    <div>
        <ul>
            {pokeData.map((pokemon, idx) => (
                <li key={idx}>{pokemon.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default PokeList