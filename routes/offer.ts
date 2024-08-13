import express from "express";
import { getAllOffersController } from "../controllers/offer";

const router = express.Router();

router.get("/", getAllOffersController);

export default router;
