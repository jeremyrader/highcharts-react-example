'use strict';

const koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const co = require('co');

const app = koa();
const router = require('koa-router')();

const weatherApi = require('./weatherApi.js');

//app.use(mount('/', serve(__dirname + '/../', { index: 'index.html' } )));


let cityForecasts = null;

router.get('/cityForecasts', function *() {
    this.body = { cityForecasts: cityForecasts };
});

app.use(router.routes());

app.listen(3001, () => {
    initCityData();
    console.log('Server listening on: http://localhost:3001');
});

function initCityData() {

    let requests = [];

    let cityIds = ['2643743', '2964574', '4148411'];

    cityIds.forEach(cityId => {
        requests.push(weatherApi.getCityForecast(cityId));
    });

    Promise.all(requests).then(values => {
        cityForecasts = values;
    });

}