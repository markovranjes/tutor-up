import express from "express";
import { getAllStudiesController } from "../controllers/study";

const router = express.Router();

router.get("/", getAllStudiesController);

export default router;
