import express from "express";
import { getAuthToken } from "../controllers/getAuthToken";

const router = express.Router();
router.get("/getAuthToken", getAuthToken);

export default router;
