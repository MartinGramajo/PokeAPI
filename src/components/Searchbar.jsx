import './searchbar.css'
import { useState } from "react";
import { Form, FormControl, Button, Card } from "react-bootstrap";
import { searchPokemon } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';


export default function Searchbar() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemons] = useState();

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemons(data);
  };

  return (
    <div>
      <Form className="container d-flex ">
          <FormControl
          type="search"
          placeholder="Buscar pokemon..."
          className="mr-2 m-auto search-bar"
          aria-label="Search"
          onChange={onChange}
        />
        <Button className="button-search my-5 mx-3" style={{border:'none', borderRadius:'10px', height: '44px'}} variant="dark" onClick={onClick}  >
        <FontAwesomeIcon icon={faSearchPlus} />
        </Button>
      </Form>
      <div className="container mx-auto p-5">
        {pokemon && (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img src={pokemon.sprites.front_default} />
              <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                </Card.Subtitle>
                <Card.Text>peso: {pokemon.weight}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
