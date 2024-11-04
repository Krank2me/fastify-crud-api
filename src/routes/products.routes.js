const controller = require("../controllers/product.controller")
const routes = [
  {
    url: "/products",
    method: "GET",
    handler: controller.getProducts
  },
  {
    method: "GET",
    url: "/products/:id",
    handler: controller.getProductById,
  },
  {
    method: "POST",
    url: "/products",
    handler: controller.saveProduct,
  },
  {
    method: "PUT",
    url: "/products/:id",
    handler: controller.updateProduct,
  },
  {
    method: "DELETE",
    url: "/products/:id",
    handler: controller.deleteProduct,
  },
]

module.exports = routes
