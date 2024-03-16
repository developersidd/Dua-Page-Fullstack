import express from "express";
import { getDuas } from "../controllers/dua.controller.js";

const router = express.Router();
// get all categories
router.get("/api/v1/duas", getDuas);

export default router;
