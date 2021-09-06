import React from "react";
import { Navbar } from "react-bootstrap";
import "./navreact.css";

export default function NavReact() {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  const pikachu = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
  return (
    <div>
      <Navbar className="nav"  bg="dark" expand="lg">
        <div>
          <Navbar.Brand href="#home">
            <div>
            <img
                className=" mt-3"
                style={{width:'100px'}}
                src={pikachu}
                alt="PokeApi-logo"
              />
              <img
                className="navbar-image mt-3"
                src={imgUrl}
                alt="PokeApi-logo"
              />
            </div>
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}
