import React from "react";

export default function Nome(props) {
  return (
    <div className="row">
      <div className="col mt-5">
        <h1 id="nome_pokemon" className="texto">
          {props.nome} <i className="fa-solid fa-hashtag"></i>
          {props.id}
        </h1>
      </div>
    </div>
  );
}
