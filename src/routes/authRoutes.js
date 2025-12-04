import dotenv from "dotenv";
dotenv.config();

import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const SECRET_KEY = process.env.JWT_SECRET || "clave_por_defecto";
const DEMO_USERNAME = process.env.DEMO_USERNAME || "admin";
const DEMO_PASSWORD = process.env.DEMO_PASSWORD || "1234";

router.post("/login", (req, res) => {
  console.log("USERNAME .env:", DEMO_USERNAME);
  console.log("PASSWORD .env:", DEMO_PASSWORD);
  console.log("BODY recibido:", req.body);

  const { username, password } = req.body;

  if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token: `Bearer ${token}` });
  } else {
    res.status(401).json({ error: "Credenciales incorrectas" });
  }
});

export default router;
