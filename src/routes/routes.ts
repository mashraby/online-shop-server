import { Router } from "express";
import multer from "multer";
import path from "path";
const router = Router();

//Controllers
import login from "../controllers/login.controller";
import categories from "../controllers/categories.controller";
import products from "../controllers/products.controller";
import orders from "../controllers/orders.controller";
import admins from "../controllers/admins.controller";
import subcategories from "../controllers/subcategories.controller";

//Middlewares
import verifyRole from "../middlewares/verifyRole.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + "/../uploads/"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
// console.log(verifyToken());

router
  .post("/login", login.LOGIN)
  // .use(verifyToken)
  .get("/categories", verifyToken, categories.GET)
  .get("/categories/:id", categories.GET_BY_ID)
  .post("/categories", categories.POST)
  .put("/categories/:id", categories.PUT)
  .delete("/categories/:id", categories.DELETE)
  .get("/products", products.GET)
  .get("/products/:id", products.GET_BY_ID)
  .post("/products", upload.array("imgs", 5), products.POST)
  .put("/products/:id", upload.array("imgs", 5), products.PUT)
  .delete("/products/:id", products.DELETE)
  .get("/orders", orders.GET)
  .post("/orders", orders.POST)
  .get("/admins", admins.GET)
  .post("/admins", admins.POST)
  .get("/subcategories", subcategories.GET);

export default router;
