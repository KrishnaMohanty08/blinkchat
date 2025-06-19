const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./router/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json);

app.use('/app/auth',authRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.error(err));

