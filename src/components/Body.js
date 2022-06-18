import React from "react";

export default function Body(props) {

  return (
    <div>

          <h1 id="nome_pokemon">{props.dados[2]} <i className="fa-solid fa-hashtag"></i>{props.dados[3]}</h1>

          <img className="imagem_pokemon" src={props.dados[0]} width="500" height="500"></img>
          <img className="imagem_pokemon" src={props.dados[1]} width="500" height="500"></img>

          <p id="peso_pokemon"><i className="fa-solid fa-weight-hanging"></i>: {props.dados[5]/10} kg</p>


    </div>
  );
}
