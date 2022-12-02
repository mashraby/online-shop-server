import { Router } from "express";
const admin_router = Router();

import admins from "../../controllers/admins.controller";

export default admin_router.get("/admins", admins.GET).post("/admins", admins.POST);
