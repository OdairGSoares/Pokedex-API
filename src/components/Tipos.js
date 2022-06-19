import React from "react";
import BUG from "./imgs/Tipos/BUG.png";
import DARK from "./imgs/Tipos/DARK.png";
import DRAGON from "./imgs/Tipos/DRAGON.png";
import ELECTRIC from "./imgs/Tipos/ELECTRIC.png";
import FAIRY from "./imgs/Tipos/FAIRY.png";
import FIGHTING from "./imgs/Tipos/FIGHTING.png";
import GHOST from "./imgs/Tipos/GHOST.png";
import GRASS from "./imgs/Tipos/GRASS.png";
import GROUND from "./imgs/Tipos/GROUND.png";
import ICE from "./imgs/Tipos/ICE.png";
import NORMAL from "./imgs/Tipos/NORMAL.png";
import POISON from "./imgs/Tipos/POISON.png";
import PSYCHIC from "./imgs/Tipos/PSYCHIC.png";
import ROCK from "./imgs/Tipos/ROCK.png";
import STEEL from "./imgs/Tipos/STEEL.png";
import WATER from "./imgs/Tipos/WATER.png";
import FIRE from "./imgs/Tipos/FIRE.png";

export default function Tipos(props) {
  return (
    <div className="">
      {props.tipos.map((tipo) => {
        switch (tipo) {
          case "BUG":
            return <img src={BUG}></img>;
            break;
          case "DARK":
            return <img src={DARK}></img>;
            break;
          case "DRAGON":
            return <img src={DRAGON}></img>;
            break;
          case "ELECTRIC":
            return <img src={ELECTRIC}></img>;
            break;
          case "FAIRY":
            return <img src={FAIRY}></img>;
            break;
          case "FIGHTING":
            return <img src={FIGHTING}></img>;
            break;
          case "GHOST":
            return <img src={GHOST}></img>;
            break;
          case "GRASS":
            return <img src={GRASS}></img>;
            break;
          case "GROUND":
            return <img src={GROUND}></img>;
            break;
          case "ICE":
            return <img src={ICE}></img>;
            break;
          case "NORMAL":
            return <img src={NORMAL}></img>;
            break;
          case "POISON":
            return <img src={POISON}></img>;
            break;
          case "PSYCHIC":
            return <img src={PSYCHIC}></img>;
            break;
          case "ROCK":
            return <img src={ROCK}></img>;
            break;
          case "STEEL":
            return <img src={STEEL}></img>;
            break;
          case "FIRE":
            return <img src={FIRE}></img>;
            break;
          case "WATER":
            return <img src={WATER}></img>;
            break;
          default:
            <p>Not Found</p>;
            break;
        }
      })}
    </div>
  );
}
