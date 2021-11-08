import Koa from 'koa';
// @ts-ignore
import views from 'koa-views';
import json from 'koa-json';
// @ts-ignore
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';

import index from './routes/index';
import users from './routes/users';

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(
    bodyparser({
        enableTypes: ['json', 'form', 'text'],
    })
);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(
    views(__dirname + '/views', {
        extension: 'pug',
    })
);

// logger
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes()).use(index.allowedMethods());
app.use(users.routes()).use(users.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});

export default app;
