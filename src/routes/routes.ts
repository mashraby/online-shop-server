import { Router } from "express";
import multer from "multer";
import path from "path";
const router = Router();

import categories from "../controllers/categories.controller";
import products from "../controllers/products.controller";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + "/../uploads/"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  // Categories requests
  .get("/categories", categories.GET)
  .post("/categories", categories.POST)
  .put("/categories/:id", categories.PUT)
  .delete("/categories/:id", categories.DELETE)
  //Products requests
  .get("/products", products.GET)
  .post("/products", upload.array("imgs", 5), products.POST);

export default router;
