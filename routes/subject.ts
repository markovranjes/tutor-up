import express from "express";
import { getAllSubjectsController } from "../controllers/subject";

const router = express.Router();

router.get("/", getAllSubjectsController);

export default router;
