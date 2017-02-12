'use strict';

const koa = require('koa');
const mount = require('koa-mount');
const serve = require('koa-static');

const app = koa();

app.use(mount('/', serve(__dirname + '/../', { index: 'index.html' } )));
        
app.listen(3000, () => {
    console.log('Server listening on: http://localhost:3000');
});