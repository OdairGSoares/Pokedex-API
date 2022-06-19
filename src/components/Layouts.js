import React from "react";
import Tipos from "./Tipos";
import Peso_Altura from "./Peso_Altura";

export default function Imagens(props) {
  const tamanho_sprites = 500;

  return (
    <div>
      <div className="row">

        <div className="col-xl-4 text-center">
          <img
            className="img_fluid"
            src={props.sprite[0]}
            width={tamanho_sprites}
            height={tamanho_sprites}
          ></img>
        </div>

        <div className=" col-xl-4 align-self-center">
          <Peso_Altura peso={props.peso} altura={props.altura} />
        </div>

        <div className="col-xl-4 align-self-center">
          <Tipos tipos={props.tipos} />
        </div>

      </div>

    </div>
  );
}
