const express = require('express');
const path = require('path');
const app = express();
const port =process.env.PORT || 3000;

//public static path 
// console.log(path.join(__dirname,"../weather/public"));
const static_path=path.join(__dirname,"../weather/public");
app.use(express.static(static_path));
 
//routing part
app.get("/",(req,res)=>{
    res.send("weclome to home")
})
app.get("/about",(req,res)=>{
    res.send("weclome to about")
    })
app.get("/contactus",(req,res)=>{
        res.send("weclome to contact us")
        })
app.get("*",(req,res)=>{
        res.send("weclome to error")
        })        
app.listen(port,()=>{
    console.log(`listening to the port at ${port}`)
})