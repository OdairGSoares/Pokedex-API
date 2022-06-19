import axios from "axios";

export async function pegar_dados_pokemon(pokemon) {
    let res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon);

    //mapear os tipos do pokemon e armazenar em um array
    var tipos = [];

    res.data.types.map((tipo_do_pokemon) => {
      return tipos.push(tipo_do_pokemon.type.name.toUpperCase());
    });

    const nome_pokemon = res.data.name.toUpperCase();
    const sprites = [
      res.data.sprites.front_default,
      res.data.sprites.front_shiny,
      res.data.sprites.back_default,
      res.data.sprites.back_shiny,

    ];
    const id = res.data.id;
    const peso = res.data.weight;
    const altura = res.data.height;

    const dados_pokemon = [nome_pokemon, sprites, tipos, peso, altura, id];

    return dados_pokemon;
}

export async function pegar_descricao_pokemon(id){
    let res= await axios.get("https://pokeapi.co/api/v2/characteristic/" + id);

    return res.data.descriptions[7].description;

}