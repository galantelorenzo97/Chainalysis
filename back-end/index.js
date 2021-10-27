const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app
    .get('/', (req, res) => res.send({
        message: 'Hello World'
    }))
    .get('/getPricesfromCoinbase/:crypto', (req, res) => {
        Promise.all([
            axios.get(`https://api.coinbase.com/v2/prices/${req.params.crypto}-USD/buy`),
            axios.get(`https://api.coinbase.com/v2/prices/${req.params.crypto}-USD/sell`)
            ])
            .then((results) => {
                const buy = results[0].data.data.amount;
                const sell = results[1].data.data.amount;
                res.send({buy, sell});
            });
    });


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));