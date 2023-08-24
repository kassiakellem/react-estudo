import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  const placeholderModificada = `${props.placeholder}`;
  
  const { type = "text" } = props;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.label}</label>
      <input
        type={type}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default Campo;
