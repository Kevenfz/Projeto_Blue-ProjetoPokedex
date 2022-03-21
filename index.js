const express = require("express");
const req = require("express/lib/request");
const app = express();
const path = require("path");
const port = 3003;


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokemons = [
    {
        id: 1,
        nome: "Charmander" ,
        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail." ,
        tipo: "Fire",
        tamanho: "0.6 m",
        peso: "8.5 kg",
        genero: "Masculino - Feminino",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
        id: 2,
        nome: "Pikachu" ,
        descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy." ,
        tipo: "Electric",
        tamanho: "0.4 m",
        peso: "6.0 kg",
        genero: "Masculino - Feminino",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
    {
        id: 3,
        nome: "Squirtle" ,
        descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force." ,
        tipo: "Water",
        tamanho: "0.5 m",
        peso: "9.0 kg",
        genero: "Masculino - Feminino",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
    {
        id: 4,
        nome: "Jigglypuff" ,
        descricao: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep." ,
        tipo: "Fairy",
        tamanho: "0.5 m",
        peso: "5.5 kg",
        genero: "Masculino - Feminino",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    },
    {
        id: 5,
        nome: "Diglett" ,
        descricao: "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops." ,
        tipo: "Ground",
        tamanho: "0.2 m",
        peso: "0.8 kg",
        genero: "Masculino - Feminino",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    },
    {
        id: 6,
        nome: "Slowpoke " ,
        descricao: "Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either." ,
        tipo: "Psychic",
        tamanho: "1.2 m",
        peso: "36.0 kg",
        genero: "Masculino - Feminino",
        img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
    },
]

app.get("/", (req, res) => {
    res.render("index.ejs", {pokemons})
});


app.post("/add", (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokemons.length + 1;
    pokemons.push(pokemon)
    res.redirect("/#cards");
});

app.get("/info/:id", (req, res) => {
    const id = +req.params.id;
    const pokemonAtual = pokemons.filter(pokemon => pokemon.id === +req.params.id);
    res.render("info.ejs", {pokemonAtual});
})



app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

