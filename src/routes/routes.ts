import { Router } from "express";
const router = Router();

import upload from "../utils/uploadImgs";

//Controllers
import login from "../controllers/login.controller";
import categories from "../controllers/categories.controller";
import products from "../controllers/products.controller";
import orders from "../controllers/orders.controller";
import admins from "../controllers/admins.controller";
import subcategories from "../controllers/subcategories.controller";

//Middlewares
// import verifyRole from "../middlewares/verifyRole.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";

router
  .post("/login", login.LOGIN)
  .get("/categories", categories.GET)
  .get("/categories/:id", categories.GET_BY_ID)
  .get("/products", products.GET)
  .get("/products/:id", products.GET_BY_ID)
  .get("/subcategories", subcategories.GET)
  .get("/subcategories/:id", subcategories.GET_BY_ID)
  .post("/orders", orders.POST)
  // .use(verifyToken)
  .post("/categories", categories.POST)
  .put("/categories/:id", categories.PUT)
  .delete("/categories/:id", categories.DELETE)
  .post("/products", upload.array("imgs", 5), products.POST)
  .put("/products/:id", upload.array("imgs", 5), products.PUT)
  .delete("/products/:id", products.DELETE)
  .get("/orders", orders.GET)
  .get("/admins", admins.GET)
  .post("/admins", admins.POST)
  .post("/subcategories", subcategories.POST);

export default router;
