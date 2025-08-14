const express = require("express");
const { getAuthToken } = require("../controllers/getAuthToken");

const router = express.Router();
router.get("/getAuthToken", getAuthToken);

module.exports = router;
