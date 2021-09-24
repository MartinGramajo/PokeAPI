import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import './App.css';
import NavReact from "./components/NavReact";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import { FavoriteProvider } from "./Contexts/favoriteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import Pagination from "./components/Pagination";

const localStorageKey = "favorite_pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  //llamado de la Api.
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false);
      setTotal(Math.ceil(data.count / 21));
      setNotFound(false);

    } catch (error) {
    }
  };

  //llamado del consumo de la api y seteo del array de dependencia "page". 
  useEffect(() => {
    if (!searching) {
      fetchPokemons()
    }
  }, [page]);

  // traer los datos del localS y setearlo en el state "pokemons". llamado de la funcion una vez. 
  useEffect(() => {
    const loadFavoritePokemons = () => {
      const pokemons = JSON.parse(localStorage.getItem(localStorageKey)) || [];
      setFavorites(pokemons);
    };
    loadFavoritePokemons();
  }, [])

  //funcion para guardar en el localS y marcar el pokemon favorito. 
  const updateFavoritePokemons = (name) => {
    const updated = [...favorites]
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };

  //funcion para buscar el pokemon
  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);

    }
    setLoading(false);
    setSearching(false);
  }
  const lastPage = () => {
    const nextPage = Math.min(page - 1, total);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };


  return (
    <FavoriteProvider value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons
    }}>
      <div >
        <NavReact />
        <Searchbar onSearch={onSearch} />
        {notFound ?
          (<div className="text-center fs-5"> <FontAwesomeIcon icon={faExclamationCircle} /> No se encontro el pokemon que buscabas!
            <Image style={{ width: '250px' }} src="https://estaticos-cdn.elperiodico.com/clip/a118c596-2966-48df-a0c9-c6ec4a2b4f3a_alta-libre-aspect-ratio_default_0.jpg" />
          </div>) :
          (<Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
          )}
        <div className="d-flex justify-content-center">
          <Pagination
            page={page + 1}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          />
        </div>
      </div>
    </FavoriteProvider>
  );
}

export default App;
