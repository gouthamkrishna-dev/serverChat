import express from "express";
import path from "path";
import ws from "ws"
import {WebSocketServer} from "ws";


const app=express();



const port=process.env.PORT || 8081

const wss=new WebSocketServer({noServer:true}); 
wss.on("connection",socket =>{
    socket.on("message",message => console.log(message.toString()));
} )

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
})
const server=app.listen(port,()=>{
    console.log(`Server started on Port ${port}`);
})
server.on("upgrade",(request,socket,head)=>{
    wss.handleUpgrade(request,socket,head,socket=>{
        wss.emit("connection",socket,request);
    })
})

const client = new ws('ws://localhost:8081');

client.on('open', () => {
  // Causes the server to print "Hello"
  client.send('Doing program for server chat');
});
