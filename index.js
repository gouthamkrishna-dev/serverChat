const express=require("express");
const app=express();
const port=process.env.PORT || 8081

app.get("/",(req,res)=>{
    res.send(" This is my first text in chat server");
})
app.listen(port,()=>{
    console.log(`Server started on Port ${port}`);
})