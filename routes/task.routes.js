import express from "express";
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask, toggleComplete } from "../controllers/task.controller.js";
import { createTaskValidation, updateTaskValidation, idValidation } from "../validator/task.validator.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.get("/",     getAllTasks);
router.get("/:id",  idValidation, validate, getTaskById);
router.post("/",    createTaskValidation, validate, createTask);
router.put("/:id",  idValidation, updateTaskValidation, validate, updateTask);
router.delete("/:id", idValidation, validate, deleteTask);
router.patch("/:id/toggle", idValidation, validate, toggleComplete);

export default router;