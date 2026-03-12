import * as ticketService from '../services/ticket.service.js'

export const handleVoiceIntake = async(req , res)=>{
    try {
        const {issueType , location , description , callerName} = req.body;
        if(!issueType || !location){
            return res.status(400).json({
                error : 'issueType and location are necessary'
            })
        }

        const newTicket = await ticketService.createTicket({
            issueType,
            location,
            description,
            callerName
        })

        res.status(201).json({
            results : [{
                toolCallId: req.body.toolCallId || null,
                result : `Ticket ${newTicket.ticketId} created succesfully ✅   `
            }],
            ticketId : newTicket.ticketId
        });
    }catch(err){
        console.error(`Intake Error : ${error.message}`);
        res.status(500).json({error : 'Failed to process voice intake'})
    }
};

