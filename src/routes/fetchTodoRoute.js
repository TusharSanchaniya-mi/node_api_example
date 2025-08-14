const express = require("express");
const { getUserTodoData } = require("../controllers/userTodo");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/fetchTodo", authenticateToken, getUserTodoData);

module.exports = router;
