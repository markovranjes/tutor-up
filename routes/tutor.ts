import express from "express";
import { getAllTutorsController } from "../controllers/tutor";

const router = express.Router();

router.get("/", getAllTutorsController);

export default router;
