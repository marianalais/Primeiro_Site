import React from "react";
import "./styles.css";

function Button({ texto }) {
  return (
    <div>
      <button className="button" onClick={() => alert("click")}>
        {texto}
      </button>
    </div>
  );
}

export default Button;
