import axios from "axios";

export async function pegar_dados_pokemon(pokemon) {
  await axios
    .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
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

      return dados_pokemon;
      
    })
    .catch((err) => {
        console.error(err);
    });
}

export async function pegar_descricao_pokemon(id){
    await axios
    .get("https://pokeapi.co/api/v2/characteristic/" + id)
    .then((res) => {
      const descricao_pokemon = res.data.descriptions[7].description;

      return descricao_pokemon;
    })
    .catch(() => {
      const descricao_pokemon = "Not Found";

      return descricao_pokemon;
    });
}