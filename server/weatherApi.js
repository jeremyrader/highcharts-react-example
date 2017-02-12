'use strict';

const co = require('co');
const request = require('co-request');

const API_KEY = 'b1fed46bf782dcadffc219042fef43d3';

let weatherApi = {};

weatherApi.getCityForecast = co.wrap(function* (cityId) {

    let endpoint = 'http://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=' + API_KEY;

    let response = yield request(endpoint);

    let data = JSON.parse(response.body);

    let simpleForecast = data.list.map(function(item) {
        return {
            time: item.dt,
            temp: item.main.temp
        }
    });

    return {
        city: data.city.name,
        country: data.city.country,
        forecast: simpleForecast
    }

});

module.exports = weatherApi;