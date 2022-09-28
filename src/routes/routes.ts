import { Router } from "express";

const router = Router();

import categories from "../controllers/categories.controller";
import products from "../controllers/products.controller";

router
  // Categories requests
  .get("/categories", categories.GET)
  .post("/categories", categories.POST)
  .put("/categories/:id", categories.PUT)
  .delete("/categories/:id", categories.DELETE)
  //Products requests
  .get("/products", products.GET)
  .post("/products", products.POST);

export default router;
