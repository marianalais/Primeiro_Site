

import App from "./App.css"
import Logo from "./assets/Logo.png";
import React, { useState } from "react";
import ic from "./assets/ic.png";

<body></body>
function Header() {

  const [name, setName] = useState("");

  return (
    <header className="caixa">

      <img className="Logo" src={Logo} alt="Logo" />
      <div>
        <input className="pesquisa"
          placeholder="Buscar"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <button className="Buscar" onClick={()=> alert("clicou")}>Buscar</button>
      
      
        <span className="Fone">
          <img className="ic" src={ic} alt="Icone" />
          (54) 99175-9012
        </span>
        <div className="Menu">
          <ul className="Item">
            
          </ul>
        </div>
        
        
      </div>
    </header>
  );
}
export default Header;



