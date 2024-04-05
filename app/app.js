import dotenv from "dotenv"
dotenv.config();
import express from 'express'
import dbConnect from '../config/dbConnect.js';
import userRoutes from "../routes/userRoute.js";

// DB connect
dbConnect();    
const app = express();      // we are creating instance of express

// routes
app.use("/", userRoutes);

export default app;         // exposed the app to be used in other files and we will use this in server.js file
