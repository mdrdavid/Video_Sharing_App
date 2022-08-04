import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import useRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from './routes/auth.js'

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

app.use("api/auth", authRoutes)
app.use("api/users", useRoutes)
app.use("api/videos", videoRoutes)
app.use("api/comment", commentRoutes)


app.listen(5000,()=>{
    connect()
console.log("server running on port 5000")
})