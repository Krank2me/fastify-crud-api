const fastify = require('fastify')({
  logger: true
})
const productRoutes = require("./routes/products.routes")
const swagger = require("./utils/swagger");
require("./utils/db")

fastify.register(require("fastify-swagger", swagger.options))

productRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
      await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()