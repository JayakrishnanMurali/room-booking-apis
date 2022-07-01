import express from "express";
import {
  DeleteUser,
  GetUser,
  ListUser,
  UpdateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/authenticateUser", verifyToken, (req, res, next) => {
//   res.send("User logged In");
// });

// router.get("/checkUserPermissions/:id", verifyUser, (req, res, next) => {
//   res.send("User logged in can have following permissions: Delete Account");
// });

// router.get("/checkadmin", verifyAdmin, (req, res, next) => {
//   res.send("User logged in can have following permissions: Admin privilages");
// });

router.get("/", verifyAdmin, ListUser);

router.put("/:id", verifyUser, UpdateUser);

router.delete("/:id", verifyUser, DeleteUser);

router.get("/:id", verifyUser, GetUser);

export default router;
