import React from 'react';
import "./pokedex.css";
import Pokemon from "./Pokemon";
import { Spinner } from "react-bootstrap";
import Pagination from "./Pagination";
import FavoriteContext from '../Contexts/favoriteContext';

const { useContext } = React; // defino el context

export default function Pokedex(props) {
  const {favoritePokemons} = useContext(FavoriteContext) // uso el context
  const { pokemons, page, setPage, total, loading } = props;
  const heart= "❤"

  const lastPage = () => {
    const nextPage = Math.min(page - 1 , total)
    setPage(nextPage)
  }


  const nextPage = () => {
    const nextPage = Math.min(page + 1 , total)
    setPage(nextPage)
  }

  return (
    <div>
      <div className="container header">
        <h1>Pokedex  </h1>
        <p> Favoritos: {heart} {favoritePokemons.length}</p>
        <Pagination
          page={page + 1}
          totalPages={total}
          onLeftClick={lastPage }
          onRightClick={nextPage}
        />
      </div>
      {loading ? <div className="text-center">
        <Spinner animation="border" variant="danger" />
        Cargando pokemons... </div> :
        <div className="container mb-5">
          <div className="row">
            {pokemons.map((pokemon, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                <Pokemon pokemon={pokemon} key={pokemon.name} />
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}
