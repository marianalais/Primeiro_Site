import Logo from "../assets/Logo.png";
import React, { useState } from "react";
import ic from "../assets/ic.png";
import { Link } from "react-router-dom";
import Text from "../components/Text";
import "./style.css";

function Header() {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <img className="Logo" src={Logo} alt="Logo" />
      <div className={"menu-links"}>
        <Link className="link" to="/home">
          Home
        </Link>
        <Link className="link" to="/sobre">
          Sobre
        </Link>
        <Link className="link" to="/contato">
          Contato
        </Link>
      </div>
      <div>
        <input
          className="pesquisa"
          placeholder="Buscar"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="Buscar" onClick={() => alert("clicou")}>
          Buscar
        </button>
        <div className="Menu">
          <ul className="Item"></ul>
        </div>
      </div>
      <Text className="Fone" texto={"(54) 99175-9012"}>
        <img className="ic" src={ic} alt="Icone" />
      </Text>
    </div>
  );
}
export default Header;
