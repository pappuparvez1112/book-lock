import mongoose, { Model, Schema, model} from "mongoose";
import {IBook,IUserMethods, UserModel} from './book.interface'

const bookSchema = new mongoose.Schema<IBook,UserModel,IUserMethods>({
   
  id:{
    type:String,
    required:true,
    unique:true,
  },
  title:{
    type:String,
    required:true,
  },
  genre:{
    type:String,
    required:true,
  },
  publicationYear:{
      type:Number,
      
  },
  publisher:{
    name:{
      type:String,
      required:true,
    },
    location:{
      type:String,
      required:true,
    }
  },
  reviews:[{
    user:{
      type:String,
      required:true,
    },
    comment:{
      type:String,
      required:true,
    }
  }],
  rating:{
    type:Number,
    
  },
  price:{
    type:Number,
    
  }
});





  //static-method

  bookSchema.statics.getBestSeller = function () {
    return this.aggregate([
      {
        $match: {
          rating: { $gte: 4 },
        },
      },
      {
        $addFields: {
          featured: {
            $switch: {
              branches: [
                {
                  case: {
                    $gt: ["$rating", 4.5],
                  },
                  then: "BestSeller",
                },
              ],
              default: "Popular",
            },
          },
        },
      },
      {
        $match: {
          featured: { $exists: true },
        },
      },{
        $sort:{rating:-1}
      },
    ]);
  };
  
  // Create the Book model
 const Book = mongoose.model<IBook,UserModel>('Book', bookSchema);
 export default Book;
  
