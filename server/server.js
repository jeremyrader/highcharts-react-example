'use strict';

const koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');

const app = koa();
const koaBody = require('koa-body')();
const router = require('koa-router')();

app.use(mount('/', serve(__dirname + '/../', { index: 'index.html' } )));




app.use(router.routes());

app.listen(3000, () => {
    console.log('Server listening on: http://localhost:3000');
});