import "./pokedex.css";
import Pokemon from "./Pokemon";

export default function Pokedex(props) {
  const { pokemons } = props;
  return (
    <div>
      <div className="container header">
        <h1>Pokedex</h1>
        <div> Pagination</div>
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
