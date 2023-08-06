import express, { Application } from 'express';
import cors from 'cors'

import { dbconnect } from './app/utils/dbConnect';





const app:Application=express();

//using cors
app.use(cors())

//using json parse data

app.use(express.json());
app.use(express.urlencoded({extended:false}))

//render ejs
// app.set("view engine","ejs")

//dbconnect
dbconnect();

//will import router

import booksRoute from "./app/modules/book/book.router"



//here will be use default route

app.get("/",(req,res)=>{
    res.render("index.ejs");
})


//custom routes path

app.use("/api/v1/books",booksRoute);

export {app};
