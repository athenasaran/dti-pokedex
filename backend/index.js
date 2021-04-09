const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 1234;
app.use(cors())

app.get('/pokemons/', async (req, res) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const mappedResponse = response.data.results.map(dadospokemon => {
        return {
            name: dadospokemon.name,
            id: dadospokemon.url.slice(34).replace('/', '')
        }
    });
    res.send(mappedResponse)
})

app.get('/pokemons/:id', async (req, res) => {
    const idPokemon = req.params.id;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
    const mappedResponse =
    {
        name: response.data.name,
        id: response.data.id,
        types: response.data.types.map((t) => t.type.name),
        abilities: response.data.abilities.map((a) => a.ability.name),
        stat: response.data.stats.map(stat => {
            return {
                name: stat.stat.name,
                value: stat.base_stat
            }
        })
    }

    res.send(mappedResponse);
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})