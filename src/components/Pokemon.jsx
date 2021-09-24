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
    <div className="container pokemon-card p-1 mb-3" style={{ width: "350px" }}>
      <div className="box pokemon-img">
        <img
          className="pokemon-fondo "
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <h3 className="text-dark text-center">
          {pokemon.name}{" "}
          <span className=" text-black-50 text-center fs-6">
            {" "}
            {pokemon.base_experience} exp{" "}
          </span>
        </h3>
        <div  className="d-flex justify-content-center" >
        {pokemon.types.map((types, idx) => {
              return (
                <div      
                  key={idx}
                >
                  <div className="fs-6 text-black-50 me-2 "> 
                  {types.type.name}
                  </div>
                </div>
              );
            })}
        </div>
      </div>    
      <div className="card-footer p-3 ">
        <div className="d-flex flex-wrap justify-content-between align-items-center ">
          <div>
            {pokemon.stats.map((stats, idx) => {
              return (
                <div
                  className="pokemon-type  rounded-2 p-1 text-dark"
                  style={{ marginRight: "15px" }}
                  key={idx}
                >
                  <div className="fs-6  d-flex flex-row">
                    {stats.stat.name}:{" "}
                    <span className="text-black-50 mx-1">
                      {" "}
                      {stats.base_stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="d-flex">
              <div>
                <Button
                  className=" border-0 boton-pokemon"
                  onClick={clickHeart}
                  variant="warning"
                >
                  <div className="pokemon-favorite"> {heart} </div>
                </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
