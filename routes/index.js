import { Router } from "express";

import exercices from './exercices.routes.js'

const router = Router();

router.use("/exercices", exercices);

export default router;

