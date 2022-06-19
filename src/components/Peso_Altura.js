import React from "react";

export default function Peso_Altura(props) {
  return (
    <div className="row mb-5">
      
      <h2 id="altura_pokemon" className="texto">
        <i className="fa-solid fa-text-height"></i>: {props.altura / 10} m
      </h2>

      <h1 id="peso_pokemon" className="texto">
        {props.peso / 10 < 50 ? (
          <i class="fa-solid fa-scale-unbalanced"></i>
        ) : (
          <i class="fa-solid fa-scale-unbalanced-flip"></i>
        )}
        : {props.peso / 10} kg
      </h1>


    </div>
  );
}
