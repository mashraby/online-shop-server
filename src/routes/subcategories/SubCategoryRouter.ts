import { Router } from "express";
const subcategories_router = Router();

import subcategories from "../../controllers/subcategories.controller";

export default subcategories_router
    .get("/subcategories", subcategories.GET)
    .get("/subcategories/:id", subcategories.GET_BY_ID)
    .post("/subcategories", subcategories.POST);