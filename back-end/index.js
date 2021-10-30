const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app
    .get('/', (req, res) => res.send({
        message: 'Hello World'
    }))
    .get('/getPricesFromCoinbase/:crypto', (req, res) => {
        Promise.all([
            axios.get(`https://api.coinbase.com/v2/prices/${req.params.crypto}-USD/buy`),
            axios.get(`https://api.coinbase.com/v2/prices/${req.params.crypto}-USD/sell`)
            ])
            .then((results) => {
                const buy = Number(results[0].data.data.amount);
                const sell = Number(results[1].data.data.amount);
                res.send({
                    exchange: "Coinbase", 
                    logo: "https://i.pcmag.com/imagery/reviews/04iFWGKegnqNWjhP2aMGdCk-10.1569476618.fit_scale.size_760x427.jpg",
                    info: "The Coinbase API includes the standard Coinbase fee (1%)", 
                    buy, 
                    sell
                });
            });
    })
    .get('/getPricesFromGemini/:crypto', (req, res) => {
        const geminiFeePercentage = 1.0149; 
        axios.get(`https://api.gemini.com/v1/pubticker/${req.params.crypto}USD`)
        .then((response) => {
            const buy = Number((response.data.ask * geminiFeePercentage).toFixed(2));
            const sell = Number((response.data.bid * geminiFeePercentage).toFixed(2));
            res.send({
                exchange: "Gemini", 
                logo: "https://btc.ng/wp-content/uploads/2018/09/Gemini.png",
                warn: "The Gemini API does not include fees. The maximum 1.49% of order value fee was included manually.", 
                buy, 
                sell
            });
        })
    })
    .get('/getPricesFromBitfinex/:crypto', (req, res) => {
        const bitfinexFeePercentage = 1.002;
        axios.get(`https://api-pub.bitfinex.com/v2/ticker/t${req.params.crypto}USD`)
        .then((response) => {
            const buy = (response.data[0] * bitfinexFeePercentage).toFixed(2);
            const sell = (response.data[2] * bitfinexFeePercentage).toFixed(2);
            res.send({
                exchange: "BitFinex", 
                logo: "https://www.bitfinex.com/images/thumbnails/bitfinex-1.png",
                warn: "BitFinex fee of 0.2% manually included.", 
                buy, 
                sell
            });
        })
    })
    .get('/getPricesFromBitstamp/:crypto', (req, res) => {
        const bitstampFeePercentage = 1.005;
        axios.get(`https://www.bitstamp.net/api/v2/ticker/${req.params.crypto.toLowerCase()}usd`)
        .then((response) => {
            const buy = Number((response.data.ask * bitstampFeePercentage).toFixed(2));
            const sell = Number((response.data.bid * bitstampFeePercentage).toFixed(2));
            res.send({
                exchange: "BitStamp", 
                logo: "https://www.paymentsjournal.com/wp-content/uploads/2017/12/bitstamp-logo.jpg",
                warn: "BitStamp fee of 0.5% manually included.", 
                buy, 
                sell
            });
        })
    })
    .get('/getAllPrices/:crypto', (req, res) => {
        Promise.all([
            axios.get(`http://localhost:${port}/getPricesFromCoinbase/${req.params.crypto}`),
            axios.get(`http://localhost:${port}/getPricesFromGemini/${req.params.crypto}`),
            axios.get(`http://localhost:${port}/getPricesFromBitfinex/${req.params.crypto}`),
            axios.get(`http://localhost:${port}/getPricesFromBitstamp/${req.params.crypto}`)
        ])
        .then((results) => {
            let completeResults = [];
            results.forEach((item) => completeResults.push(item.data));
            res.send([...completeResults]);
        })
    });


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));