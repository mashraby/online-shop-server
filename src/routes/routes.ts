import { Router } from "express";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
const router = Router();

import categories from "../controllers/categories.controller";
import products from "../controllers/products.controller";

const uploadConfig = [
  {
    name: "imgs",
    maxCount: 8,
  },
];

router
  // Categories requests
  .get("/categories", categories.GET)
  .post("/categories", categories.POST)
  .put("/categories/:id", categories.PUT)
  .delete("/categories/:id", categories.DELETE)
  //Products requests
  .get("/products", products.GET)
  .post("/products", upload.fields(uploadConfig), products.POST);

export default router;
