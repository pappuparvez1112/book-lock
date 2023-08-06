import mongoose from 'mongoose'
import { log } from './logger';
require('dotenv').config()

const {URI}=process.env;


const dbconnect=async():Promise<void>=>{
   try{
    if(!URI){
        log.error("not found uri");
        process.exit(1);
    }
    await mongoose.connect(URI);
    log.info("Database connected")
   }catch(err:any){
    log.error(err.message)
   }
};

export {dbconnect};