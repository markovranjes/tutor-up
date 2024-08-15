import express from "express";
import { getAllProgramsController } from "../controllers/program";

const router = express.Router();

router.get("/", getAllProgramsController);

export default router;
