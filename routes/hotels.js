import express from "express";
import {
  CreateHotel,
  DeleteHotel,
  GetHotel,
  ListHotel,
  UpdateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", ListHotel);

router.post("/", verifyAdmin, CreateHotel);

router.put("/:id", verifyAdmin, UpdateHotel);

router.delete("/:id", verifyAdmin, DeleteHotel);

router.get("/:id", GetHotel);

export default router;
