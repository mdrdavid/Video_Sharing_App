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

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", useRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.use((err, req, res, next)=>{
    const status =err.status || 500;
    const message =err.message || "Something went wrong";
    return res.status(status).json({
        succeful:false,
        status,
        message
    })
})



const PORT = 8080
app.listen(PORT,()=>{
    connect()
console.log(`server running on port ${PORT}`)
})