
const express=require('express')
const app=express()
require('dotenv').config()


const cors=require('cors')
const router=require('./Routes/route')
const db=require('./db')
const middleware=require('./Middleware/appMiddleware') 
 const jwtmiddleware=require('./Middleware/jwtMiddleware') 

app.use(express.json())
app.use(cors())
// app.use(middleware);
// app.use(jwtmiddleware)
app.use(router)

const PORT=4000 || process.env.port

app.listen(PORT,()=>{console.log("App has started at port ", PORT)})

app.get("/",(req,res)=>{
    res.send("Book Store has Started")
})