const {json}=require('express')
const jwt=require('jsonwebtoken')
const userSchema=require('../Models/userSchema')

// Register
exports.register=async(req,res)=>{
    console.log("inside controller");
    const{username,email,password}=req.body
    try{
        const existingUser=await userSchema.findOne({email})
        if(existingUser){
            res.status(401).json("User already Exists")
        }
        else{
            const newUser=await userSchema({username,email,password })
           await newUser.save()
        res.status(200).json("User Registered Succesfully")
        }

    }
    catch(err){
        res.status(500).json("server Error"+err)

    }
}

// login
exports.login=async(req,res)=>{
    const{email,password}=req.body
    try{
        const user=await userSchema.findOne({email,password})
    if(user){

        const token = jwt.sign({userId:user._id},"superkey2024")
        console.log(token);
        res.status(200).json({user,token})

    }
    else{
        res.status(404).json("Invalid Login")
    }

    }
    catch(err){
        res.status(500).json("Server Error"+err.message)

    }
    
}

