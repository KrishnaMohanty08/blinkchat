module.exports=function(io){
    
//io connection building
io.on("connection",(socket)=>{
    console.log("User connected",socket.id);

    socket.on("message",({message})=>{
        console.log(message);
        socket.emit("receive-message",message);
    })

    // socket.on("join-room",(room)=>{
    //     socket.join(room);
    //     console.log(`User joined ${room}`)
    // })

    socket.on("disconnect",()=>{
        console.log(`User Disconnected`,socket.id);
    })

})

}
