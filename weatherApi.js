'use strict'

const request = require('request-promise')

const API_KEY = 'b1fed46bf782dcadffc219042fef43d3'

exports.getCityForecast = async (cityId) => {

    let response = await request(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}`)
    let data = JSON.parse(response)

    return {
        city: data.city.name,
        country: data.city.country,
        temperature: data.list.map(item => {
            return [ item.dt * 1000, parseInt((((item.main.temp - 273.15) * 9/5) + 32).toPrecision(2)) ]
        }),
        humidity: data.list.map(item => {
            return [ item.dt * 1000, item.main.humidity ]
        }),
        windspeed: data.list.map(item => {
            return [ item.dt * 1000, item.wind.speed ]
        })
    }
}