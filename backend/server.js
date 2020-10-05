const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to the database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log('Connected to database!');
});

app.use(cors());
app.use(express.json());

// Adding Routes
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port :${port}`);
});