const express=require('express')
const router=new express.Router()
const jwtMiddleware=require('../Middleware/jwtMiddleware')
const userController=require('../Controllers/userController')
const bookController =require('../Controllers/bookController')
// register
router.post("/register",userController.register)

// login
router.post('/login',userController.login)

// Add Books
router.post('/books/add',jwtMiddleware,bookController.addBook)

//View All Books
router.get('/books',jwtMiddleware,bookController.viewallBook)

// View Book by ID
router.get('/books/view/:id',jwtMiddleware,bookController.viewbookbyid)

//Edit/Update book
router.put('/books/edit/:id',jwtMiddleware,bookController.editBook)

//Delete Book
router.delete('/books/delete',jwtMiddleware,bookController.deleteBook)



module.exports=router