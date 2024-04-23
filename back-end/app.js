//importing
const express = require('express');
const morgan = require('morgan');

require('dotenv').config()
const PORT = process.env.PORT;
require('./DB/connection')
const mentorRoute = require('./routes/mentorRoutes');

//initialisation
const app = express();
app.use(morgan('dev'));



//listen
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})