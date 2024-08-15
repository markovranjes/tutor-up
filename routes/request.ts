import express from "express";
import { getAllRequestsController } from "../controllers/request";

const router = express.Router();

router.get("/", getAllRequestsController);

export default router;
