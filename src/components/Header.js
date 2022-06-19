import Brand from "./imgs/Icones/Poké_Ball_icon.png";
import React, { useState } from "react";
import Body from "./Body";
import { pegar_dados_pokemon } from "../services/Get_Pokemon";

export default function Header() {
  //useState que recebe as informações retornadas da api
  const [pokemon, setPokemon] = useState("");
  const [resposta, setResposta] = useState("");

  async function procurar_pokemon(pokemon_escolhido, e) {
    e.preventDefault();
    setResposta(await pegar_dados_pokemon(pokemon_escolhido.toLowerCase()));
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="/">
          <img src={Brand} width="50px" height="50px" alt="PokeAPI"></img>
        </a>

        <form className="form-inline my-2 my-lg-0" method="GET">
          <input
            className="mr-sm-2"
            type="search"
            placeholder="Search your Pokemon!"
            aria-label="Search"
            onChange={(e) => setPokemon(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={(e) => {
              procurar_pokemon(pokemon, e);
            }}
          >
            Search
          </button>
        </form>
      </nav>
      {resposta && <Body dados={resposta}/>}
    </div>
  );
}
