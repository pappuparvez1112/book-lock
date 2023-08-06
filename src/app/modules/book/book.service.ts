
import mongoose, { ObjectId } from "mongoose";
import { IBook } from "./book.interface";
import bookList from "./book.model";


export const createBookUserToDB=async(payload:IBook):Promise<IBook>=>{
  
    const book=new bookList(payload);  
    await book.save();
    return book;
  };
export const getAllBookFromDB=async():Promise<IBook[]>=>{
    return bookList.find();
};

export const getBestSellerFromDB=async()=>{
    const seller=await bookList.getBestSeller();
    return seller;
};


export const getAllBookByIdFromDB=async(genre:string):Promise<IBook[]>=>{
    return bookList.aggregate([
        {
            $match: { genre:genre}
    
        },
        {$project:{genre:1,"publisher.name":1}}
    ])
}

export const getAllBookByIdFromDB1=async(genre:string,publisher:string):Promise<IBook[]>=>{
    return bookList.aggregate([
        {
            $match: { genre:genre,"publisher.name":publisher}
    
        },
        {$project:{genre:1,"publisher.name":1}}
    ])
}

export const getUpdatedFromDB=async(id:string,data:string)=>{  


    return bookList.updateMany(
        {
         publicationYear: { $gte: 2022 },
         price: { $type: "string" }
       },
       [
         {
           $set: {
             price: { $toInt: "$price"}
           }
         }
       ]
     );
         
};
