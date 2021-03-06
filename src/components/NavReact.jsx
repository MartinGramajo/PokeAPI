import React from "react";
import { Navbar } from "react-bootstrap";
import "./navreact.css";

export default function NavReact() {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div>
      <Navbar className="nav"  bg="dark" expand="lg">
        <div>
          <Navbar.Brand href="#home">
            <div className="mt-4">
              <img
                className="navbar-image mt-1"
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
