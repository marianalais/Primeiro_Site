import React, { useState } from "react";
import "./styles.css";

function Input() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
         className="pesquisa"
         placeholder="buscar"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
    </div>
  );
}

export default Input;


