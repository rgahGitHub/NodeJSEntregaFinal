import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import corsMiddleware from "./middlewares/cors.js";
import notFoundMiddleware from "./middlewares/notFound.js";
import errorMiddleware from "./middlewares/errorHandler.js";
import authMiddleware from "./middlewares/auth.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

//Configura el middleware global de body-parser para interpretar los body en formato JSON de las peticiones.
app.use(express.json());

app.use(corsMiddleware);

app.use("/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Hola, mundo desde Express!'); 
});

app.use("/api/usuario", usuarioRoutes);

app.use("/api/products", authMiddleware, productsRoutes);//app.use("/api/products", productsRoutes);

app.post("/api/test400", (req, res, next) => {
  const { nombre } = req.body;
  if (!nombre) {
    const error = new Error("Falta el campo 'nombre'");
    error.statusCode = 400;
    return next(error);
  }
  res.send(`Hola ${nombre}`);
});

// Middleware 404
app.use(notFoundMiddleware);

// Middleware de errores
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`); 
});