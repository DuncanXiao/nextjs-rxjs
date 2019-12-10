require('dotenv').config()
const Koa = require('koa')
const next = require('next')
const initRouter = require('./routers')
const {
  serverRuntimeConfig: {
    port, nextDir
  }, publicRuntimeConfig: {
    isDev
  }
} = require('../../share/env')

const app = next({
  dev: isDev,
  dir: nextDir
})

app.prepare().then(() => {
  const server = new Koa()
  const router = initRouter({ app })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
