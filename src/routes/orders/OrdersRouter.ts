import { Router } from "express";
const orders_router = Router();
import orders from "../../controllers/orders.controller";


export default orders_router
  .get("/orders", orders.GET)
  .post("/orders", orders.POST)