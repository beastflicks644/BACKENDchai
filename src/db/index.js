import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
console.log(process.env.MONGO_URI);
const connectDb = async () => 
{
    try {
        const connection=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        
        // console.log('\n MongoDB connected !! DB HOST: ${connection.connection.host}');
        console.log(`MongoDB connected !! DB HOST: ${connection.connection.host}`);
    }
    catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
}
}
export default connectDb;