//importing
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');

require('dotenv').config()
const PORT = process.env.PORT;
require('./DB/connection')
const mentorRoute = require('./routes/mentorRoutes');

//initialisation
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use('/api', mentorRoute);
app.use('/api/project', projectRoutes);


//listen
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})