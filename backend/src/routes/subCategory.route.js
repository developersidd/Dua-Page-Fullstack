import express from "express";
import { getSubCategories } from "../controllers/subCategory.controller.js";

const router = express.Router();
// get all categories
router.get("/api/v1/sub_categories", getSubCategories);

export default router;
