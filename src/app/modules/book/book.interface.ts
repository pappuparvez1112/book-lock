import { HydratedDocument, Model } from "mongoose";
export interface IBook extends Document {

    id:string;
    title:string;
    genre:string;
    publicationYear:number,
    publisher:{
      name:string;
      location:string;
   },
   reviews:[
      {
         user:string;
         comment:string;
      },
      {
         user:string;
         comment:string;
      }
   ],
   rating:number;
   price:number
  }

  //STATIC METHOD

  export interface IUserMethods {
    getBestSeller():string;
  }


  //static
  export interface UserModel extends Model<IBook, {}, IUserMethods> {
    getBestSeller(): Promise<HydratedDocument<IBook, IUserMethods>>;
  };