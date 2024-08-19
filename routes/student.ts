import express from "express";
import {
  createStudentController,
  getAllStudentsController,
} from "../controllers/student";

const router = express.Router();

router.get("/", getAllStudentsController);
router.post("/", createStudentController);

export default router;
