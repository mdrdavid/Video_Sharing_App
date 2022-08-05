
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import User from '../models/User.js'
import Jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const signup = async (req,res, next)=>{
try{
    User.findOne({ email: req.body.email}, async (err, doc)=>{
        console.log(err)
        console.log(doc)
        if(err){
            next(err)
        }
        if(doc){
            res.status(200).send("User already registered, please login")
        } else{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({...req.body, password:hash})
            await newUser.save()
            res.status(200).send("User has been created")
        }
    })
}catch(err){
    console.log(err)
    next(createError(404,"Not found!"))
}
}

export const signin = async (req,res, next)=>{
    try{
        const user = await User.findOne({ name: req.body.name})
            // ,async(err, doc)=>{
            if(!User){
                return next(createError(404, "user not found"))
            }
            const isCorrect = await bcrypt.compare(req.body.password, user.password)
            if(isCorrect) return next(createError(404, "wrong password"))

            // if(doc){
            //     res.status(200).send("User registered, please login")
            // } 
            // else{
            //     const salt = bcrypt.genSaltSync(10);
            //     const hash = bcrypt.hashSync(req.body.password, salt);
            //     const newUser = new User({...req.body, password:hash})
            //     await newUser.save()
            //     res.status(200).send("User has been created")
            // }


            const token = Jwt.sign({id:User._id}, process.env.JWT)

            //exclide password before sending the user 
            const {password, ...others} = user._doc
            res.cookie("access_token", token,{
                httpOnly:true
            }).status(200)
            .json(others)

    }catch(err){
        console.log(err)
        next(createError(404,"Not found!"))
    }
    }