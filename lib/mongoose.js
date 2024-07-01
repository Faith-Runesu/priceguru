import mongoose from "mongoose";

let conectionStatus = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', false);

     if (conectionStatus) return console.log("Mongoose connection established already");

     try{
        await mongoose.connect(process.env.MONGOURI);
        console.log("connected");
        conectionStatus = true;
     }
     catch (error){
        console.log(error.message);
     }
}