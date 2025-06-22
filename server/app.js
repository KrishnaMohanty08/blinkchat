const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./router/authRoutes');
const chatRouter=require('./router/chatRoute');
const port=4000;

require('dotenv').config();

const app = express();
app.use(express.json);

app.use('/app/auth',authRouter);
app.use('/app/chatroom',chatRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.error(err));

