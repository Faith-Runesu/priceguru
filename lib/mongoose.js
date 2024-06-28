import mongoose from "mongoose";

let conectionStatus = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', false);

     if (isConnected) return console.log("Mongoose connection established");

     try{
        await mongoose.connect(process.env.MONGOURI);
        connectionStatus = true;
     }
     catch (error){
        console.log(error.message);
     }
}