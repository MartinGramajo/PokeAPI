import { useContext } from "react";
import FavoriteContext from "../Contexts/favoriteContext";
import {Button} from "react-bootstrap"
import "./pokemon.css";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const redHeart = "❤";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  }

  return (
    <div className="pokemon-card p-1 mb-3">
      <div className="pokemon-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body p-4 bg-dark">
        <div className="card-top d-flex flex-row  justify-content-between align-items-center">
          <h3 className="text-info">{pokemon.name}</h3>
          <div className="text-white">#{pokemon.id}</div>
        </div>
        <div className="card-bottom d-flex flex-row  justify-content-between align-items-center ">
          <div className="pokemon-type d-flex ">
            {pokemon.types.map((type, idx) => {
              return (
                <div
                  className="bg-danger rounded-2 p-1 text-white"
                  style={{ marginRight: "10px" }}
                  key={idx}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <Button className="bg-white" onClick={clickHeart} variant="outline-light">
            <div className="m-auto pokemon-favorite bg-white"> {heart} </div>
          </Button>
        </div>
        <div className="d-flex text-white p-1 ">
          {pokemon.abilities.map((ability, idx) => {
              return (
                <div
                  className="bg-warning rounded-2 text-dark mt-2"
                  style={{ marginRight: "10px" }}
                  key={idx}
                  >
                  {ability.ability.name}
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default Pokemon;
