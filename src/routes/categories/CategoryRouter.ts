import { Router } from "express";
const category_router = Router();

import categories from "../../controllers/categories.controller";


export default category_router
    .get("/categories", categories.GET)
    .get("/categories/:id", categories.GET_BY_ID)
    .post("/categories", categories.POST)
    .put("/categories/:id", categories.PUT)
    .delete("/categories/:id", categories.DELETE)