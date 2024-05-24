const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString)
.then(()=>{
    console.log("Mongodb Connection Established");
})
.catch((err)=>{
    console.log("Error connecting Mongodb"),err;
})

module.exports=mongoose