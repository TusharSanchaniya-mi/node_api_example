const express = require("express");
const { getUserTodoData } = require("../controllers/userTodo");

const router = express.Router();
router.get("/fetchTodo", getUserTodoData);

module.exports = router;
