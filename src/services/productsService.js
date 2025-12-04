import * as productModel from "../models/productModel.js";

export const getAllProducts = () => productModel.getAllProducts();
export const getProductById = (id) => productModel.getProductById(id);
export const createProduct = (data) => productModel.createProduct(data);
export const deleteProduct = (id) => productModel.deleteProduct(id);

/*

let productos = [
  { id: 1, nombre: "Producto A", precio: 10, cantidad: 5 },
  { id: 2, nombre: "Producto B", precio: 20, cantidad: 3 }
];

export const getAllProducts = () => productos;

export const getProductById = (id) => {
  const product = productos.find(p => p.id === id);
  if (!product) throw new Error(`No existe producto con id ${id}`);
  return product;
};

export const createProduct = ({ nombre, precio, cantidad }) => {
  if (!nombre || precio == null || cantidad == null) {
    throw new Error("Faltan datos obligatorios: nombre, precio, cantidad");
  }

  const newProduct = {
    id: productos.length + 1,
    nombre,
    precio,
    cantidad
  };
  productos.push(newProduct);
  return newProduct;
};

export const deleteProduct = (id) => {
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) throw new Error(`No existe producto con id ${id}`);
  productos.splice(index, 1);
  return { message: `Producto ${id} eliminado correctamente` };
};
*/