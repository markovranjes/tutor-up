import express from "express";
import {
  getAllOffersController,
  createOfferController,
} from "../controllers/offer";

const router = express.Router();

router.get("/", getAllOffersController);
router.post("/", createOfferController);

export default router;
