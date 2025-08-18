import express from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import getUserTodoData from "../controllers/userTodo";

const router = express.Router();
router.get("/fetchTodo", authenticateToken, getUserTodoData);

export default router;
