import './searchbar.css'
import { useState } from "react";
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
    e.preventDefault()
    onSearch(search);
  };

  return (
    <div>
      <div className="text-center">
        <img
          className="poke-titulo"
          src="https://res.cloudinary.com/dtbfspso5/image/upload/v1632508786/d28472afb9a391904f9eab67724b5431_fnhqcm.png" alt="" />
      </div>
      <form className="container d-flex justify-content-center " style={{width:'300px'}}>
          <input
          type="text"
          placeholder="Buscar pokemon..."
          className="mr-2 m-auto search-bar"
          onChange={onChange}
        />
        <button className="button-search bg-danger  my-5" style={{border:'none', borderRadius:'10px', height: '40px', width:'50px'}} variant="dark" onClick={onClick}  >
        <FontAwesomeIcon icon={faSearchPlus} />
        </button> 
      </form>
    </div>
  );
}
