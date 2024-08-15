import express from "express";
import { getAllUniversitiesController } from "../controllers/university";

const router = express.Router();

router.get("/", getAllUniversitiesController);

export default router;
