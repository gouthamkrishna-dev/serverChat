const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT || 8081

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
})
app.listen(port,()=>{
    console.log(`Server started on Port ${port}`);
})