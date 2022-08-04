import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()
dotenv.config()

const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err) =>{
        throw err;
    });
}

app.listen(5000,()=>{
    connect()
console.log("server running on port 5000")
})