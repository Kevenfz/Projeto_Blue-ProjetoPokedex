require("dotenv").config();
const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = process.env.PORT || 3003;
const path = require("path");

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
        img: "https://64.media.tumblr.com/349aff504a8ac16a58055d2b9d7cad34/0efac011cf014221-ea/s500x750/e8c8c877aeff8f51ca54fa87afeff6b424242660.gifv",
    },
    {
        id: 2,
        nome: "Pikachu" ,
        descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy." ,
        tipo: "Electric",
        tamanho: "0.4 m",
        peso: "6.0 kg",
        genero: "Masculino - Feminino",
        img: "https://i.gifer.com/OqDo.gif",
    },
    {
        id: 3,
        nome: "Squirtle" ,
        descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force." ,
        tipo: "Water",
        tamanho: "0.5 m",
        peso: "9.0 kg",
        genero: "Masculino - Feminino",
        img: "https://i.imgur.com/xONwm7L.gif",
    },
    {
        id: 4,
        nome: "Jigglypuff" ,
        descricao: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep." ,
        tipo: "Fairy",
        tamanho: "0.5 m",
        peso: "5.5 kg",
        genero: "Masculino - Feminino",
        img: "https://i.pinimg.com/originals/e0/db/72/e0db72594143348df0ba94a98212cb13.gif",
    },
    {
        id: 5,
        nome: "Diglett" ,
        descricao: "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops." ,
        tipo: "Ground",
        tamanho: "0.2 m",
        peso: "0.8 kg",
        genero: "Masculino - Feminino",
        img: "https://i.pinimg.com/originals/94/6f/61/946f6177a8c56ac8910c3f26e1c729bc.gif",
    },
    {
        id: 6,
        nome: "Slowpoke " ,
        descricao: "Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either." ,
        tipo: "Psychic",
        tamanho: "1.2 m",
        peso: "36.0 kg",
        genero: "Masculino - Feminino",
        img: "https://kingdomofzealblog.files.wordpress.com/2017/05/slowpoke-6.gif",
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

