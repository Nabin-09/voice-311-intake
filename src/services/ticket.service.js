import Ticket from "../models/Ticket";

export const generateTicketId = ()=>{
    const randomHex = Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4 , 0);
    return `TKT-${randomHex}`
};

export const createTicket = async(ticketData)=>{
    const ticketId = generateTicketId();
    const ticket = new Ticket({
        ticketId,
        ...ticketData
    });
    return await ticket.save()
}