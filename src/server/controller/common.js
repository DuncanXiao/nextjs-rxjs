const nextHandle = (app) => {
  const handle = app.getRequestHandler()
  return (async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
}

const defaultHandle = (path) => async ctx => {
  await app.render(ctx.req, ctx.res, path, ctx.query)
  ctx.respond = false
}

module.exports = {
  nextHandle,
  defaultHandle
}
