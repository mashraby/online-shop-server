import { Router } from "express";
const login_router = Router();

import login from "../../controllers/login.controller";

export default login_router.post("/login", login.LOGIN)
