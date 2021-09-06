import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import './App.css';
import NavReact from "./components/NavReact";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { getPokemonData, getPokemons } from "./api";
import { FavoriteProvider } from "./Contexts/favoriteContext";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState(['raichu']);



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
        setTotal(Math.ceil(data.count / 21));

      } catch (error) {
      }
    }
    fetchPokemons()
  }, [page])


  const updateFavoritePokemons = (name) => {
    const updated = [...favorites]
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
  };

  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons
    }}>
      <div >
        <NavReact />
        <Searchbar />
        <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      </div>
    </FavoriteProvider>
  );
}

export default App;
