import { Router } from "express";
import multer from "multer";
import path from "path";
const router = Router();

import categories from "../controllers/categories.controller";
import products from "../controllers/products.controller";
import orders from "../controllers/orders.controller";
import admins from "../controllers/admins.controller";

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
  .get("/products/:id", products.GET_BY_ID)
  .post("/products", upload.array("imgs", 5), products.POST)
  .put("/products/:id", upload.array("imgs", 5), products.PUT)
  .delete("/products/:id", products.DELETE)
  //Orders requests
  .get("/orders", orders.GET)
  .post("/orders", orders.POST)
  //Admins requests
  .get("/admins", admins.GET)
  .post("/admins", admins.POST);

export default router;
