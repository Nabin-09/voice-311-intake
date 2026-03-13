import { Router } from "express";
import { handleVoiceIntake } from "../controllers/ticket.controller.js";
import { verifyApiKey } from "../middleware/auth.middleware.js";
import { validateTicketPayload } from "../middleware/validate.middleware.js";




const router = Router();

router.post('/create-ticket' ,verifyApiKey , validateTicketPayload,  handleVoiceIntake);

export default router;