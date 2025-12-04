import { Router } from "express";
import * as productsController from "../controllers/productsController.js";

const router = Router();

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);
router.post("/create", productsController.createProduct);
router.delete("/:id", productsController.deleteProduct);

export default router;