import express from "express";
import { getAllStudentsController } from "../controllers/student";

const router = express.Router();

router.get("/", getAllStudentsController);

export default router;
