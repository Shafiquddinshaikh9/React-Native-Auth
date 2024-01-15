import express from "express";
import bcrypt from "bcrypt";
import User from "../model/Users.js";
import auth from "../middleware/auth.js";
const router = express.Router();

export default router;
