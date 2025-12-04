import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "mi_clave_secreta";

export const signToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
