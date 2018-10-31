'use strict'

const Koa = require('koa')

const app = new Koa()
const router = require('koa-router')()

const weatherApi = require('./weatherApi.js')

router.get('/cityForecasts', async (ctx, next) => {

    await next()

    let cityIds = ['2643743', '2964574', '4148411']
    let requests = cityIds.map(async cityId => await weatherApi.getCityForecast(cityId))

    ctx.body = { cityForecasts: await Promise.all(requests)}
})

app.use(router.routes())

app.listen(3001, () => {
    console.log('Server listening on: http://localhost:3001')
})