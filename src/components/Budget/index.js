import React, { useState } from "react";
import "./style.css";
import Button from "../Button";
import Input from "../Input";

function Budget() {
  const [name, setName] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className="budget">

      <div>
        <h1 className="orcamento"> Solicite um orçamento:</h1>
        <Input
          value={name}
          onChange={(e) => setName(e)}
          placeholder={"Nome"}
          className={"input-name"}
        /> <br/> <br/>
        <Input
          value={contato}
          onChange={(e) => setContato(e)}
          placeholder={"Contato"}
          className={"input-contato"}
        /> <br/> <br/>
        <Input
          value={email}
          onChange={(e) => setEmail(e)}
          placeholder={"Email"}
          className={"input-email"}
        /> <br/> <br/>
        <Input
          value={descricao}
          onChange={(e) => setDescricao(e)}
          placeholder={"Descrição"}
          className={"input-descricao"}
        /> <br/> <br/>
        <Button 
        className={"button-enviar"}
        texto={"Enviar"}/>
      </div>
    </div>
  );
}
export default Budget;
