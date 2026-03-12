import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
    ticketId : {
        type : String,
        required : true ,
        unique : true
    },
    issueType : {
        type : String ,
        required : true
    },
    location : {
        type : String ,
        required : true
    },
    description : {
        type : String
    },
    callerName : {
        type : String,
    },
    status : {
        type : String,
        default : 'Open'
    },
    createdAt : {
        type : String,
        default : Date.now()
    }
});

export default mongoose.model('Ticket', TicketSchema);