const Koa = require('koa')
const next = require('next')
const path = require('path')
const initRouter = require('./routers')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  dir: path.resolve(__dirname, '../client')
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