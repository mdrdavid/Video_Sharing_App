import express from 'express'
import {verifyToken} from "../verifyToken.js"
import{ addVideo, addView, deleteVideo, getVideo, random, sub, trend, updateVideo } from "../controllers/video.js"


const router = express.Router()

//CREATE VIDEO

router.post("/", verifyToken, addVideo)



// UPDATE VIDEO

router.put("/:id", verifyToken, updateVideo)

// DELETE VIDEO

router.delete("/:id", verifyToken, deleteVideo)
export default router


//GET VIDEO

router.get("/find/:id", verifyToken, getVideo)

router.put("/views/:id", verifyToken, addView)

router.get("/trend", verifyToken, trend)

router.get("/rendom", verifyToken, random)

router.get("/sub", verifyToken, sub)



