import * as productService from "../services/productsService.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const productos = await productService.getAllProducts();
    res.json(productos);
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};


export const createProduct = async (req, res, next) => {
  try {

    const { nombre, precio, cantidad } = req.body;

    if (!nombre || !precio || !cantidad) {
      const error = new Error("Los campos 'nombre', 'precio' y 'cantidad' son obligatorios");
      error.statusCode = 400;
      throw error;
    }

    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id; 
    const result = await productService.deleteProduct(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
