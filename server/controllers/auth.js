
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import User from '../models/User.js'
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
        User.findOne({ email: req.body.email},async(err, doc)=>{
            console.log(err)
            console.log(doc)
            if(!User){
                return next(createError(404, "user not found"))
            }
            // const isCorrect = await bcrypt.compare(req.body.password, password)
            // if(isCorrect) return next(createError(404, "wrong password"))

            if(doc){
                res.status(200).send("User registered, please login")
            } 
        })
            // else{
            //     const salt = bcrypt.genSaltSync(10);
            //     const hash = bcrypt.hashSync(req.body.password, salt);
            //     const newUser = new User({...req.body, password:hash})
            //     await newUser.save()
            //     res.status(200).send("User has been created")
            // }
       
    }catch(err){
        console.log(err)
        next(createError(404,"Not found!"))
    }
    }