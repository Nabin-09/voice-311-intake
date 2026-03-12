import { Router } from "express";
import { handleVoiceIntake } from "../controllers/ticket.controller.js";


const router = Router();

router.post('/create-ticket' , handleVoiceIntake);

export default router;