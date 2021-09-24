import React from "react";
import "./pokedex.css";
import Pokemon from "./Pokemon";
import { Spinner } from "react-bootstrap";
import FavoriteContext from "../Contexts/favoriteContext";

const { useContext } = React; // defino el context

export default function Pokedex(props) {
  const { favoritePokemons } = useContext(FavoriteContext); // uso el context
  const { pokemons, loading } = props;
  const heart = "❤";

  return (
    <div className="container">
      <div className=" row header">
        <h1 className="text-danger text-center">
          <img style={{width:'250px'}} src="https://res.cloudinary.com/dtbfspso5/image/upload/v1632508639/3bd785059e50cd245a94d858ae8af472_vqqupq.png" alt="" /> {heart} {favoritePokemons.length}
        </h1>
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
