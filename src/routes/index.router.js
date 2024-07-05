import { Router } from "express";

import engineRouter from "./engines.router.js";

const router = Router();
const prefijo = "app";

router.use(`/${prefijo}/engine`, engineRouter)

export default router;
