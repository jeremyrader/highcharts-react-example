'use strict';

const request = require('request');

const API_KEY = 'b1fed46bf782dcadffc219042fef43d3';


let endpoint = 'http://api.openweathermap.org/data/2.5/forecast/city?id=2643743&APPID=' + API_KEY;

request(endpoint, function (error, response, body) {
    
    if (error) console.log(error);
    
    if (!error && response.statusCode == 200) {
        let data = JSON.parse(response.body);

        let simpleForecast = data.list.map(function(item) {
            return {
                time: item.dt,
                temp: item.main.temp
            }
        });
        

        let cityForecast = {
            city: data.city.name,
            country: data.city.country,
            forecast: simpleForecast 
        }

        console.log(cityForecast);
        
    }
});