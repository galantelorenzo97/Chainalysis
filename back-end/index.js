const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;

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
                res.send({
                    exchange: "Coinbase", 
                    info: "The Coinbase API includes the standard Coinbase fee (1%)", 
                    buy, 
                    sell
                });
            });
    })
    .get('/getPricesfromGemini/:crypto', (req, res) => {
        const geminiFeePercentage = 1.0149; 
        axios.get(`https://api.gemini.com/v1/pubticker/${req.params.crypto}USD`)
        .then((response) => {
            const buy = response.data.ask * geminiFeePercentage;
            const sell = response.data.bid * geminiFeePercentage;
            res.send({
                exchange: "Gemini", 
                warn: "The Gemini API does not include fees. The maximum 1.49% of order value fee was included manually.", 
                buy, 
                sell
            });
        })
    });


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));