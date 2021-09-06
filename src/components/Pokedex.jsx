import { Spinner } from "react-bootstrap";
import Pagination from "./Pagination";
import "./pokedex.css";
import Pokemon from "./Pokemon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Pokedex(props) {
  const { pokemons, page, setPage, total, loading } = props;

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
        <p className="text-black-50"> Favoritos: <FontAwesomeIcon icon={faHeart} /> { 100 }</p>
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
        <div className="container pokedex-grid mb-5">
          <div className="row">
            {pokemons.map((pokemon, idx) => (
              <div key={idx} className="col-4">
                <Pokemon pokemon={pokemon} key={pokemon.name} />
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}
