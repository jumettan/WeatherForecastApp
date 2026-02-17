const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const e = require('express');

require ('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express());

app.get('/api/weather', async (req,res)=>{
    const {city} = req.query;
    try{
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=7`
            
        );
        if(!response.ok){
            console.log("Weather API respond status: " , response.status);
            return res.status(response.status).json({error : 'failed to fetch from server. '});
        }
        const data = await response.json();
        console.log('Fetched weather data:', data);
        res.json(data)
    } catch(e){
        console.error("Weather API Error: ", e)
        res.status(500).json({error: 'Error fetching weather data.'})
    }
});
app.listen(PORT, () => {
    console.log('Server running on port ', PORT)
});