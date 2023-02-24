import React from "react";

function Text({ texto, children, ...rest }) {
  return (
    <div>
      {children}
      <span {...rest}>{texto}</span>
    </div>
  );
}
export default Text;
