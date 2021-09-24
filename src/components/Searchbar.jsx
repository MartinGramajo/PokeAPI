import './searchbar.css'
import { useState } from "react";
import { Form, FormControl, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';


export default function Searchbar(props) {
  const { onSearch } = props;
  const [search, setSearch] = useState("");


  const onChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div>
      <div className="text-center">
        <img
          className="poke-titulo"
          src="https://res.cloudinary.com/dtbfspso5/image/upload/v1632508786/d28472afb9a391904f9eab67724b5431_fnhqcm.png" alt="" />
      </div>
      <Form className="container d-flex " style={{width:'500px'}}>
          <FormControl
          type="search"
          placeholder="Buscar pokemon..."
          className="mr-2 m-auto search-bar"
          aria-label="Search"
          onChange={onChange}
        />
        <Button className="button-search bg-danger  my-5 mx-3" style={{border:'none', borderRadius:'10px', height: '44px'}} variant="dark" onClick={onClick}  >
        <FontAwesomeIcon icon={faSearchPlus} />
        </Button> 
      </Form>
    </div>
  );
}
