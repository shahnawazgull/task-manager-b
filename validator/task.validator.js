import { body, param } from "express-validator";

export const createTaskValidation = [
  body("title")
    .notEmpty().withMessage("Title is required").bail()
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters")
    .isLength({ max: 200 }).withMessage("Title cannot exceed 200 characters")
    .trim(),

  body("description")
    .optional()
    .isLength({ max: 1000 }).withMessage("Description cannot exceed 1000 characters")
    .trim(),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"]).withMessage("Priority must be low, medium, or high"),
];

export const updateTaskValidation = [
  body("title")
    .optional()
    .notEmpty().withMessage("Title cannot be empty")
    .isLength({ min: 3 }).withMessage("Title must be at least 3 characters")
    .isLength({ max: 200 }).withMessage("Title cannot exceed 200 characters")
    .trim(),

  body("description")
    .optional()
    .isLength({ max: 1000 }).withMessage("Description cannot exceed 1000 characters")
    .trim(),

  body("priority")
    .optional()
    .isIn(["low", "medium", "high"]).withMessage("Priority must be low, medium, or high"),

  body("completed")
    .optional()
    .isBoolean().withMessage("Completed must be true or false"),
];

export const idValidation = [
  param("id")
    .isMongoId().withMessage("Invalid task ID"),
];