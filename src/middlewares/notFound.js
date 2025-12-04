// Establece un middleware que maneje las rutas desconocidas, devolviendo el estado 404 y un mensaje.
export default (req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};
