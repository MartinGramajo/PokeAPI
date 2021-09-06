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
    <div className="pokemon-card p-1">
      <div className="pokemon-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body p-4">
        <div className="card-top d-flex flex-row  justify-content-between align-items-center">
          <h3 className="text-info">{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom d-flex flex-row  justify-content-between align-items-center ">
          <div className="pokemon-type d-flex ">
            {pokemon.types.map((type, idx) => {
              return (
                <div
                  className="text-danger"
                  style={{ marginRight: "10px" }}
                  key={idx}
                >
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <Button onClick={clickHeart} variant="outline-light">
            <div className="m-auto pokemon-favorite"> {heart} </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
