const express = require ('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Import Routes
const postRoutes = require('./routes/posts');
app.use('/posts',postRoutes);

//Routes
app.get('/',(req,res)=>{
    res.send('We are in Home')
})


//Middleware
//Funcn that executes when route are being hit
// app.use('/post',()=>{
//     console.log('Post route hit by middleware');
// })


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("Connected to DB");
})

//How to start listenig to the server
app.listen(3000);