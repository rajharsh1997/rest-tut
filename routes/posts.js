const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes

router.get('/',(req,res)=>{
    res.send('We are in Post')
})

router.get('/specific',(req,res)=>{
    res.send('We are in Specific Post')
})

router.post('/',(req,res)=>{
    console.log(req.body);
})

module.exports = router;