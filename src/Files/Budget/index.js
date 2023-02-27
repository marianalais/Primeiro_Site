import React, { useState } from "react";
import "./style.css";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Budget() {
  const [name, setName] = useState("");

  return (
    <div className="budget">

      <div>
        <h1 className="orcamento"> Solicite um orçamento:</h1>
        <Input/>
        <Button texto={"Enviar"}/>
        
      </div>
    </div>
  );
}
export default Budget;
