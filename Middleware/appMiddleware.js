const appMiddleware=(req,res,next)=>{
    console.log("Inside the app middle ware");
    next();
    
}
module.exports=appMiddleware