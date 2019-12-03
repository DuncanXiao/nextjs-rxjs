const ToolkitService = require('../lib/toolkit')

const aHandle = (app) => async (ctx) => {
  const { req, res, path, query } = ctx
  req.toolkit = new ToolkitService(req)
  await app.render(req, res, path, query)
  ctx.respond = false
}

module.exports = aHandle