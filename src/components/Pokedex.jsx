import Pagination from "./Pagination";
import "./pokedex.css";
import Pokemon from "./Pokemon";

export default function Pokedex(props) {
  const { pokemons } = props;
  return (
    <div>
      <div className="container header">
        <h1>Pokedex</h1>
        <Pagination />
      </div>
      <div className="container pokedex-grid">
        <div className="row">
          {pokemons.map((pokemon, idx) => (
            <div className="col-4">
              <Pokemon pokemon={pokemon} key={pokemon.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
