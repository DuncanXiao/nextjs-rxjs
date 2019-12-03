const nextHandle = (app) => {
  const handle = app.getRequestHandler()
  return (async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
}

const defaultHandle = (app) => async (ctx) => {
  const { req, res, path, query } = ctx
  await app.render(req, res, path, query)
  ctx.respond = false
}

module.exports = {
  nextHandle,
  defaultHandle
}
