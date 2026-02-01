import dotenv from "dotenv";
dotenv.config({ path: './.env' })

import connectDb from "./db/index.js";
import { app } from "./app.js";


connectDb()

.then(()=>{
    
    app.on("error",(error)=>{
            console.error("Failed to connect to MongoDB", error);
            throw err;
        })

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
})
})
.catch((err) => {
    console.log("MongoDb connection failed", err);
})







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