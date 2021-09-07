import React from "react";
import "./pokedex.css";
import Pokemon from "./Pokemon";
import { Spinner } from "react-bootstrap";
import Pagination from "./Pagination";
import FavoriteContext from "../Contexts/favoriteContext";

const { useContext } = React; // defino el context

export default function Pokedex(props) {
  const { favoritePokemons } = useContext(FavoriteContext); // uso el context
  const { pokemons, page, setPage, total, loading } = props;
  const heart = "❤";

  const lastPage = () => {
    const nextPage = Math.min(page - 1, total);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div className="container">
      <div className=" row header">
        <h1 className="text-white text-center col-sm-4 ">Pokedex </h1>
        <h1 className="text-danger text-center   col-sm-4 col-md-4">
          Favorites {heart} {favoritePokemons.length}
        </h1>
        <div className="col-sm-4 col-md-4">
          <Pagination
            page={page + 1}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          />
        </div>
      </div>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="danger" />
          Cargando pokemons...{" "}
        </div>
      ) : (
        <div className="container mb-5">
          <div className="row">
            {pokemons.map((pokemon, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sx-12 col-sm-12">
                <Pokemon pokemon={pokemon} key={pokemon.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
