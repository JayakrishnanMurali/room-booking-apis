import express from "express";
import {
  CreateRoom,
  DeleteRoom,
  GetRoom,
  ListRoom,
  UpdateRoom,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", ListRoom);

router.post("/:hotelId", verifyAdmin, CreateRoom);

router.put("/:id", verifyAdmin, UpdateRoom);

router.delete("/:id/:hotelId", verifyAdmin, DeleteRoom);

router.get("/:id", GetRoom);

export default router;
