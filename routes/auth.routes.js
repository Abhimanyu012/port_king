import express from "express";
import { register } from "../controllers/auth.controllers.js";
const router = express.Router();

router.get("/me", (req, res) => {
  res.json({ message: "Auth profile route" });
});
router.post("/register", register);

router.post("/login", (req, res) => {
  res.json({ message: "Login route" });
});

export default router;
