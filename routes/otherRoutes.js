import express from "express";
import { addToWaitingList } from "../controllers/otherController.js";

const router = express.Router();

//Add to waitlist form
router.route("/excited").post(addToWaitingList);

export default router;
