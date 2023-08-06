import { Request,Response,NextFunction } from "express";
import { createBookUserToDB, getAllBookByIdFromDB,getAllBookByIdFromDB1,getAllBookFromDB, getBestSellerFromDB, getUpdatedFromDB } from "./book.service";
import { sendApiResponse } from "../../utils/responseHandaler";


export const createBooklist=async (req:Request, res:Response,next:NextFunction) => {
    const data=req.body;
    const user= await createBookUserToDB(data)
    res.status(200).json({
        status:"success",
        data:user,
    });
};

export const getAllBookS=async(req:Request,res:Response,next:NextFunction)=>{
    const books=await getAllBookFromDB();
    sendApiResponse(res,200,true,books);
}

export const getBestSeller=async(req:Request,res:Response,next:NextFunction)=>{
    const books=await getBestSellerFromDB();
    sendApiResponse(res,200,true,books);
}

export const getAllBookSById=async(req:Request,res:Response,next:NextFunction)=>{
    const {genre}=req.params;
    const book=await getAllBookByIdFromDB(genre);
    sendApiResponse(res,200,true,book);
}
export const getAllBookSById1=async(req:Request,res:Response,next:NextFunction)=>{
    const {genre,publisher}=req.params;
    const book=await getAllBookByIdFromDB1(genre,publisher);
    sendApiResponse(res,200,true,book);
}

export const getUpdate=async(req:Request,res:Response,next:NextFunction)=>{
    // const {id}=req.params;
    // const books=await getUpdatedFromDB();
    // sendApiResponse(res,200,true,books);
    const {id}=req.params;
    const data=req.body;
    const bookupdate= await getUpdatedFromDB(id,data)
    sendApiResponse(res,200,true,bookupdate);
}
