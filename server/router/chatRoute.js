const express=require("express");
const router=express.Router();
const {Server} =require('socket.io');
const cors =require('cors');

//setting cors server defaults
const io=new Server(Server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        credentials:true,
    },
});
router.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST"],
    credentials:true,
}));

//io connection building
io.on("connection",(socket)=>{
    console.log("User connected",socket.id);
})

module.exports=router;
