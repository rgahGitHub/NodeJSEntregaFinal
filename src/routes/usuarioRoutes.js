import { Router } from "express";

const router = Router();

router.post("/", (req, res, next) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      const error = new Error("El campo 'nombre' es obligatorio");
      error.statusCode = 400;
      throw error;
    }

    res.status(201).json({
      mensaje: "Datos recibidos",
      data: { nombre }
    });
  } catch (err) {
    next(err); 
  }
});

export default router;
