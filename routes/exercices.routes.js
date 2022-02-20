import Router from 'express';
const router = Router();

import {
    createExercice,
    getAllExercices,
    getExerciceById,
    updateExerciceById,
    deleteExerciceById
} from '../controller/exercices.controller.js'

router.post("/", createExercice);
router.get("/", getAllExercices);
router.get("/:id", getExerciceById);
router.put("/update/:id", updateExerciceById);
router.delete("/delete/:id", deleteExerciceById);

export default router;