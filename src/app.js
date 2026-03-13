import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import ticketRoutes from './routes/ticket.routes.js'


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api' , ticketRoutes);
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

export default app;

