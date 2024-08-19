import express from "express";
import {
  createTutorController,
  getAllTutorsController,
} from "../controllers/tutor";

const router = express.Router();

router.get("/", getAllTutorsController);
router.post("/", createTutorController);

export default router;
