const Router = require('koa-router')
const { nextHandle, defaultHandle } = require('../controllers/common')
const aHandle = require('../controllers/aController')

const initRouter = ({ app }) => {
  const router = new Router()
  router.get('/a', aHandle(app))

  router.get('/b', defaultHandle(app))

  router.all('*', nextHandle(app))

  return router
}

module.exports = initRouter
