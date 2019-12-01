const Router = require('koa-router')
const { nextHandle, defaultHandle } = require('../controller/common')

const initRouter = ({ app }) => {
  const router = new Router()
  router.get('/a', defaultHandle('/a'))

  router.get('/b', defaultHandle('/b'))

  router.all('*', nextHandle(app))

  return router
}

module.exports = initRouter