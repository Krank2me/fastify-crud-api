const Product = require("../models/product.model")

const getProducts = async (req, reply) => {
  try {
    const products = await Product.find();

    reply.code(200).send(products);
  } catch (err) {
    reply.code(400).send({message: "products not found"})
  }
}

const getProductById = async (req, reply) => {
  try {
    const product = await Product.findById(req.params.id);

    reply.code(200).send({message: "ok", data: product});
  } catch (err) {
    reply.code(400).send({message: "product not found"})
  }
}

const saveProduct = async (req, reply) => {
  try {
    const product = new Product(req.body)
    await product.save()
    reply.code(201).send({message: "ok", data: product})
  } catch (error) {
    reply.code(400).send({message: "error creating object"})
  }
}

const updateProduct = async (req, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    reply.code(200).send({message: "ok", data: product});
  } catch (err) {
    reply.code(400).send({message: "error updating object"})
  }
}

const deleteProduct = async (req, reply) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    reply.code(204).send();
  } catch (err) {
    reply.code(400).send({message: "error deleting object"})
  }
}

module.exports = {
  getProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct
}