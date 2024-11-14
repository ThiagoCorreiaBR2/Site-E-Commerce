import express from "express";
import { getProducts, newProduct } from "../controller/productControllers.js";

const router = express.Router();

//rota para obter todos os produtos
router.route("/products").get(getProducts);

//rota apenas para admin do sistema para cadastrar produtos
router.route("/admin/products").post(newProduct);

export default router;