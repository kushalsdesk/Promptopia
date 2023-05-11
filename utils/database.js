import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectoDB = async () => {
    mongoose.set( 'strictQuery', true);

    if(isConnected){
        console.log("mongodb is already connected");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected= true;
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
}