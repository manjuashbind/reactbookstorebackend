const mongoose =require('mongoose')
const bookSchema=new mongoose.Schema({
         title:{
          type:String,required:true
            },
        author:{
            type:String,required:true
            },
         pyear:{
          type:String,required:true
          },
          genre:{
            type:String,required:true
            },
          image:{
            type:String,required:true
            }
})
const booksModel=mongoose.model("books",bookSchema)
module.exports=booksModel