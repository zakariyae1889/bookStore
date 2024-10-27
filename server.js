import express from "express";
import dotenv from "dotenv";
import { Connectdb } from "./config/configdb.js";
import BookRouters from './router/router.book.js';
import cors from 'cors'
const app =express();
dotenv.config();
app.use(express.json());
app.use(cors());


//router
app.use("/api/book",BookRouters);


//MERN Mongose Expressjs Reactjs Nodejs


const port=process.env.PORT || 3000
app.listen("3000",()=>{
    console.log(`app is listening to port :${port}`);
    Connectdb();
   
});