import "./pokemon.css";

const Pokemon = (props) => {
  const { pokemon } = props;
  return (
    <div className="pokemon-card p-1">
      <div className="pokemon-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body p-4">
        <div className="card-top d-flex flex-row  justify-content-between align-items-center">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom d-flex flex-row  justify-content-between align-items-center ">
          <div className="pokemon-type d-flex ">
            {pokemon.types.map((type, idx) => {
              return <div key={idx}> {type.type.name}</div>;
            })}
          </div>
        <div className="mt-2 pokemon-favorite"> ❤ </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
