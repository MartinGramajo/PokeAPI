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
        <div>
          {pokemon.types.map((type, idx) => {
            return <div key={idx}> {type.name}</div>;
          })}
        </div>
        <div className="mt-5"> ♥ </div>
      </div>
    </div>
  );
};

export default Pokemon;
