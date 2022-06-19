import React from "react";

import Layouts from "./Layouts";
import Nome from "./Nome";
import Descricao from "./Descricao";

export default function Body(props) {

  return (
    <div className="container-fluid bg-light text-center">

      <Nome nome={props.dados[0]} id={props.dados[5]}/>

      <Layouts sprite={props.dados[1]} peso={props.dados[3]} altura={props.dados[4]} tipos={props.dados[2]}/>

      <Descricao id={props.dados[5]} />

    </div>
  );
}
