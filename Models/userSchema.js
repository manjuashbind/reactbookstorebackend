const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
     },
     email:{
         type:String,
         require:true
     },
     password:{
         type:String,
         require:true
     } 
})
const usersModel=mongoose.model("users",userSchema)
module.exports=usersModel