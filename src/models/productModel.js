import db from "../config/firebase.js";

const collection = db.collection("productos");

export const getAllProducts = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) throw new Error(`No existe producto con id ${id}`);
  return { id: doc.id, ...doc.data() };
};

export const createProduct = async ({ nombre, precio, cantidad }) => {
  const docRef = await collection.add({ nombre, precio, cantidad });
  const doc = await docRef.get();
  return { id: doc.id, ...doc.data() };
};

export const deleteProduct = async (id) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();
  if (!doc.exists) throw new Error(`No existe producto con id ${id}`);
  await docRef.delete();
  return { message: `Producto ${id} eliminado correctamente` };
};
