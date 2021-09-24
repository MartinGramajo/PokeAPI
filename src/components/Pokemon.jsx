import { useContext } from "react";
import FavoriteContext from "../Contexts/favoriteContext";
import { Button } from "react-bootstrap";
import "./pokemon.css";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const redHeart = "❤";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
      <div className="container pokemon-card p-1 mb-3" style={{width:'350px'}}>
        <div className="box pokemon-img">
          <img className="pokemon-fondo " src={pokemon.sprites.front_default} alt={pokemon.name}  />
        <h3 className="text-dark text-center">{pokemon.name} <span className="text-black-50"> {pokemon.weight}Hp </span>  </h3>
        <span className=" text-black-50 text-center"> {pokemon.base_experience} exp </span>
        </div>
        <div className="card-footer p-3 ">
          <div className="d-flex flex-row  justify-content-between align-items-center ">
            <div className="pokemon-type d-flex ">
              {pokemon.types.map((type, idx) => {
                return (
                  <div
                    className="pokemon-type  rounded-2 p-1 text-dark"
                    style={{ marginRight: "15px" }}
                    key={idx}
                  >
                    <div className="fs-5 text-black-50">
                      {type.type.name}
                    </div>
                    <div className="text-center fs-6">
                      type
                    </div>
                  </div>
                );
              })}
          </div>

            <div>
            <Button
              className="bg-white"
              onClick={clickHeart}
              variant="outline-light"
            >
              <div className="m-auto pokemon-favorite bg-white"> {heart} </div>
            </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Pokemon;
