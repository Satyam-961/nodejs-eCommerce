import mongoose from "mongoose";

const dbConnect = async ()=>{
    try{
        const connected = await mongoose.connect(process.env.MONGO_URL)
        mongoose.set("strictQuery", false);
        console.log(`MongoDb Connected ${connected.connection.host}`);
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnect;

// mallyXLYgZqLA4Wx
// satyamcode143