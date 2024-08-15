import express from "express";
import { getAllFacultiesController } from "../controllers/faculty";

const router = express.Router();

router.get("/", getAllFacultiesController);

export default router;
