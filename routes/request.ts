import express from "express";
import {
  createRequestController,
  getAllRequestsController,
  updateRequestController,
} from "../controllers/request";

const router = express.Router();

router.get("/", getAllRequestsController);
router.post("/", createRequestController);
router.put("/:id", updateRequestController);

export default router;
