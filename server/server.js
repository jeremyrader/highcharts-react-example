'use strict';

const koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');
const co = require('co');

const app = koa();
const koaBody = require('koa-body')();
const router = require('koa-router')();

const weatherApi = require('./weatherApi.js');

app.use(mount('/', serve(__dirname + '/../', { index: 'index.html' } )));

let cityIds = ['2643743', '2964574', '4148411'];
let cityForecasts = [];


let requests = [];

cityIds.forEach(cityId => {
    requests.push(weatherApi.getCityForecast(cityId));
});

Promise.all(requests).then(values => {
    console.log(values);
});

app.use(router.routes());

app.listen(3000, () => {
    console.log('Server listening on: http://localhost:3000');
});