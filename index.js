
import axios from 'axios';   
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.API_KEY;
const city= process.argv[2];

if (!city) {
    console.error('Please provide a city name as an argument.');
    process.exit(1);
}

async function getweather(cityName){
    try{ 
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
    );
    const data = response.data;

    console.log("\n🌤 Rapport météo");
    console.log(`Ville: ${data.location.name}`);
    console.log(`Pays: ${data.location.country}`);
    console.log(`Heure locale: ${data.location.localtime}`);
    console.log(`Température: ${data.current.temp_c}°C`);
    console.log(`Conditions: ${data.current.condition.text}`);
    console.log(`Humidité: ${data.current.humidity}%`);
    console.log(`Vent: ${data.current.wind_kph} km/h\n`);


    } catch (error) {
    if (error.response) {
      console.error(" Erreur API:", error.response.data.error.message);
    } else if (error.request) {
      console.error(" Erreur réseau: Impossible de joindre le serveur.");
    } else {
      console.error("Erreur inattendue:", error.message);
    }
  }
}

getweather(city);

console.log("API_KEY:", API_KEY);
console.log("City:", city);