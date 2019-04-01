const express = require('express')
const app = express()
const port = 5555

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => res.send([{
    zipCod: 606105,
    city: "Pennadam",
    Precipitation: 501, weather: "Rain", description: "light rain", Humidity: "80%" 
    },
    {
        zipCod: 605105,
        city: "Agaram",
        Precipitation: 502, weather: "Sunny", description: "Clear with periodic clouds", Humidity: "20%"
    },
    {
        zipCod: 604105,
        city: "Karappakam",
        Precipitation: 503, weather: "Cloudy", description: "cloudy but rainless day", Humidity: "40%" 
    },
    {
        zipCod: 603105,
        city: "Himachal",
        Precipitation: 504, weather: "Hevay Rain", description: "Rainfall greater than 100 mm", Humidity: "100%" 
    },
    {
        zipCod: 602105,
        city: "Cairngorm",
        Precipitation: 505, weather: "Strong wind", description: "Short bursts of high-speed wind", Humidity: "60%" 
    },
    {
        zipCod: 601105,
        city: "French",
        Precipitation: 506, weather: "Freezing rain", description: "Rain temperatures below freezing", Humidity: "100%" 
    }
]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))