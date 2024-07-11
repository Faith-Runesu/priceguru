import mongoose from "mongoose";

let conectionStatus = false;

//connect to the database
export const connectToDB = async () => {
   mongoose.set('strictQuery', false);

   try {
      await mongoose.connect(process.env.MONGOURI);
      console.log("connected");
      conectionStatus = true;
   }
   catch (error) {
      console.log(error.message);
   }
}