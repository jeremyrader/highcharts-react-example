'use strict';

const co = require('co');
const request = require('co-request');

const API_KEY = 'b1fed46bf782dcadffc219042fef43d3';

let weatherApi = {};

weatherApi.getCityForecast = co.wrap(function* (cityId) {

    let endpoint = 'http://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=' + API_KEY;
    let response = yield request(endpoint);

    let data = JSON.parse(response.body);

    return {
        city: data.city.name,
        country: data.city.country,
        temperature: data.list.map(function(item) {
            return [ item.dt * 1000, parseInt((((item.main.temp - 273.15) * 9/5) + 32).toPrecision(2)) ]
        }),
        humidity: data.list.map(function(item) {
            return [ item.dt * 1000, item.main.humidity ]
        }),
        windSpeed: data.list.map(function(item) {
            return [ item.dt * 1000, item.wind.speed ]
        })
    }

});

module.exports = weatherApi;