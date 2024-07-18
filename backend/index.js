const cors = require('cors');
const axios = require('axios');
const express = require('express');
const app = express();

app.use(cors());

require('dotenv').config();

app.use(express.json());

app.get('/api/weather/:location', async (req, res) => {
  try {
    const { api_url1, api_url2, appid, units } = process.env;
    const { location } = req.params;

    const weather_url = `${api_url1}?q=${location}&limit=1&appid=${appid}`;
    const weather = await axios.get(weather_url);
    const { lat, lon, name, country, state } = weather.data[0];

    const feelsLike_url = `${api_url2}?&lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`;
    const feelsLike = await axios.get(feelsLike_url);
    const { description } = feelsLike.data.weather[0];
    const { temp, temp_min, temp_max, feels_like } = feelsLike.data.main;

    const result = {
      Name: name,
      Country: country,
      State: state,
      Localização: {
        Latitude: lat,
        Longitude: lon
      },
      Temperature: temp.toFixed(0),
      Sensation: feels_like.toFixed(0),
      Minimum: temp_min.toFixed(0),
      Maximum: temp_max.toFixed(0),
      Description: description
    }

    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(400).json({Message: 'City not found! Please type a valid name'});
  }
})

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
)