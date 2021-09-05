import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import './App.css';
import NavReact from "./components/NavReact";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { getPokemonData, getPokemons } from "./api";
import { Spinner } from "react-bootstrap";



function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true); 



  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true)
        const data = await getPokemons(25, 25 * page);
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonData(pokemon.url) // array de promesa con datos especifico de cada pokemon. crea 10 promesas para cada pokemon.
        })
        const results = await Promise.all(promises) // con el await hacemos esperar al codigo hasta que regrese el array de promesas de la linea 19.
        setPokemons(results)
        setLoading(false);
        setTotal(Math.ceil(data.count / 25));
  
      } catch (error) {
      }
    }
    fetchPokemons()
  }, [page])

  return (
    <div >
      <NavReact />
      <Searchbar />
      {loading ? <div className="text-center">
        <Spinner  animation="border" variant="danger" />
        Cargando pokemons... </div> :
        <Pokedex
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
     }
    </div>
  );
}

export default App;
