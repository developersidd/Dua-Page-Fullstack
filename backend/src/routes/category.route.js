import express from "express";
import { getCategories } from "../controllers/category.controller.js";

const router = express.Router();
// get all categories
router.get("/api/v1/categories", getCategories);

export default router;
