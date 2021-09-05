import "./pokedex.css"
import Pokemon from "./Pokemon";


export default function Pokedex(props) {
    const {pokemons} = props
    return (
        <div>
            <div className="container header">
                <h1>Pokedex</h1>
                <div> Pagination</div>
            </div>
            <div className="container pokedex-grid">
                {pokemons.map((pokemon, idx) => (
                    <Pokemon pokemon={pokemon} key={pokemon.name} />
                ))}
            </div>
        </div>
    )
}
