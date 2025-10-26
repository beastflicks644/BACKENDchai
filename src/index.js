import dotenv from "dotenv";

import connectDb from "./db/index.js";
dotenv.config({ path: './.env' })


connectDb();






/*server and databse connecton setup code
import express from "express"
const app=express();

(async () => {
    try{
        await mongoose.connect('${process.env.MONGO_URI}/${DB_NAME}')
        app.on("error",(error)=>{
            console.error("Failed to connect to MongoDB", error);
            throw err;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch(error)
    {
        console.error("Failed to connect to MongoDB", error);
        throw err;
    }
})();*/