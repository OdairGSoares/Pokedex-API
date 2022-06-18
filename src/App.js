import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { pegar_dados_pokemon, pegar_descricao_pokemon } from "./services/Get_Pokemon";
import axios from "axios";
function App() {
  //useState que recebe as informações retornadas da api
  //const [pokemon, setPokemon] = useState([]);
  const [dadosPokemon, setDadosPokemon] = useState([]);
  async function dados_poke(){
    
    return setDadosPokemon(await pegar_dados_pokemon('pikachu'));
  }
  
  console.log(dados_poke())
  
  /*useEffect(() => {

    axios
    .get("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((res) => {
        
      //mapear os tipos do pokemon e armazenar em um array
      var tipos = [];

      res.data.types.map((tipo_do_pokemon) => {
        return tipos.push(tipo_do_pokemon.type.name);
      });

      const nome_pokemon = res.data.name.toUpperCase();
      const sprites = [
        res.data.sprites.front_default,
        res.data.sprites.front_shiny,
      ];
      const id = res.data.id;
      const peso = res.data.weight;

      const dados_pokemon = [nome_pokemon, sprites, tipos, peso, id];

      
    })
    .catch((err) => {
        console.error(err);
    });

  }, []);
  */
  return (
    <div>
      {/* <Header />
      {pokemon === undefined ? <Body dados={pokemon} /> : <div/>}
      <Footer /> */}
    </div>
  );
}

export default App;
