const { json } = require('express')
const bookSchema=require('../Models/bookSchema')

// AddBook
exports.addBook=async(req,res)=>{
    const userId=req.payload;
    console.log("Inside book controller ,jwt userId :",userId);
    const{title,author,genre,pyear,image}=req.body
    try{
        const newBook=new bookSchema({title,author,genre,pyear,image})
        const addbook=await newBook.save();
        console.log(addbook);
        res.status(200).json("Book added successfully")

    }
    catch(err){
        res.status(500).json("Error Adding Book" + err.message)
    }

}

// View All Book
exports.viewallBook=async(req,res)=>{
    const searchKey=req.query.search
    const query={
        title:{
            $regex:searchKey,
            $options:"i"
        }
    }
    try{
        const allBooks=await bookSchema.find(query);
        res.status(200).json(allBooks)

    }
    catch(err){
        res.status(500).json("Server error : cannot  fetch books")
    }
}

// view book by id

exports.viewbookbyid=async(req,res)=>{
    try{
        const {id}=req.params
        console.log(id);
        const book= await bookSchema.findOne({_id:id})
        res.status(200).json(book)

    }
    catch(err){
        res.status(500).json("Server error : cannot  fetch book by id")
    }
}

// Edit Book
exports.editBook=async(req,res)=>{
   
    const{title,author,genre,pyear,image}=req.body
    try{
        const {id}=req.params
        const updateBook=await bookSchema.findByIdAndUpdate({_id:id},{title,author,genre,pyear,image},{new:true})
        await updateBook.save();
        res.status(200).json(updateBook)

    }
    catch(err){
        res.status(500).json("Server error : cannot  Update book ")
    }
}

// .Delete Book................

exports.deleteBook=async(req,res)=>{
    console.log("Inside Delete Controller");
    const{id}=req.body
    console.log("deletebookid :",id);
    try{
        const deletebook=await bookSchema.findByIdAndDelete({_id:id})
        res.status(200).json(deletebook)

    }
    catch(err){
        res.status(500).json("Server error : cannot  Delete book ") 
    }
}
