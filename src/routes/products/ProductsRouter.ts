import { Router } from "express";
const products_router = Router();
import products from "../../controllers/products.controller";
import upload from "../../utils/uploadImgs";

export default products_router
    .get("/products", products.GET)
    .get("/products/:id", products.GET_BY_ID)
    .post("/products", upload.array("imgs", 5), products.POST)
    .put("/products/:id", upload.array("imgs", 5), products.PUT)
    .delete("/products/:id", products.DELETE)