import { Router } from "express";
const router = Router();

// Routers 
import admins from "../routes/admins/AdminRouter"
import categories from "../routes/categories/CategoryRouter"
import login from "../routes/login/LoginRouter"
import orders from "../routes/orders/OrdersRouter"
import products from "../routes/products/ProductsRouter"
import subcategories from "../routes/subcategories/SubCategoryRouter"

router
  .use([admins, categories, login, orders, products, subcategories])

export default router;
