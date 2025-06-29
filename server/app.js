const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./router/authRoutes');
const handleSocket=require('./handleSocket');
const cors=require('cors');
const {Server}=require('socket.io');
const port=4000;
const http=require('http');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000",
    method:['GET','POST'],
    credentials:true,
}))

app.use('/app/auth',authRouter);
// app.use('/app/chatroom',handleSocket);

const io=new Server(server,{
  cors:{
    origin:"http://localhost:3000",
    method:['GET','POST'],
    credentials:true,
  }
})
handleSocket(io);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     server.listen(port, () => {
//       console.log(`Server running on http://localhost:${port}`);
//     });
//   })
//   .catch(err => console.error('MongoDB connection error:', err))
  server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });

