const express = require("express");
const app = express();
const port = 3003;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokemons = [
    {
        id: "Nº: 01",
        nome: "Charmander" ,
        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail." ,
        tipo: "Type: Fire",
        img: "https://64.media.tumblr.com/349aff504a8ac16a58055d2b9d7cad34/0efac011cf014221-ea/s500x750/e8c8c877aeff8f51ca54fa87afeff6b424242660.gifv",
    },
    {
        id: "Nº: 02",
        nome: "Pikachu" ,
        descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy." ,
        tipo: "Type: Electric",
        img: "https://i.gifer.com/OqDo.gif",
    },
    {
        id: "Nº: 03",
        nome: "Squirtle" ,
        descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force." ,
        tipo: "Type: Water",
        img: "https://i.imgur.com/xONwm7L.gif",
    },
    {
        id: "Nº: 04",
        nome: "Jigglypuff" ,
        descricao: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep." ,
        tipo: "Type: Fairy",
        img: "https://i.pinimg.com/originals/e0/db/72/e0db72594143348df0ba94a98212cb13.gif",
    },
    {
        id: "Nº: 05",
        nome: "Diglett" ,
        descricao: "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops." ,
        tipo: "Type: Ground",
        img: "https://i.pinimg.com/originals/94/6f/61/946f6177a8c56ac8910c3f26e1c729bc.gif",
    },
    {
        id: "Nº: 06",
        nome: "Slowpoke " ,
        descricao: "Slow-witted and oblivious, this Pokémon won’t feel any pain if its tail gets eaten. It won’t notice when its tail grows back, either." ,
        tipo: "Type: Psychic",
        img: "https://kingdomofzealblog.files.wordpress.com/2017/05/slowpoke-6.gif",
    },
]

app.get("/", (req, res) => {
    res.send("Hello world!")
});

app.get("/index", (req, res) => {
    res.render("index.ejs", {pokemons})
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

