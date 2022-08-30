import express from 'express'
import{ deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js"
import { verifyToken } from '../verifyToken.js'


const router = express.Router()
//update User
router.put("/:id", verifyToken, update)


//delete User
router.delete("/:id", verifyToken, deleteUser)
//get User
router.get("/find/:id", getUser)
//subscribe a  User
router.put("/sub/:id", verifyToken, subscribe)
//unsubscribe a User
router.put("/unsub:id", verifyToken, unsubscribe)
//like  a Video
router.put("/like/:videoId", verifyToken, like)
//dislike  a Video
router.put("/dislike:videoId", verifyToken, dislike)


export default router