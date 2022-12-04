let express = require('express');
let router = express.Router();
let mongoose= require ('mongoose');

//connect with JobSearch model
let JobSearch = require('../models/JobSearch');
// crud!

module.exports.displayJobSearchList= (req,res,next)=>{
JobSearch.find((err,JobSearchlist)=>{
if (err)
{

    return console.error(err);
}else{

    res.render('JobSearch/list',{
title:'Job Searching Page',
JobSearchlist: JobSearchlist,
displayName: req.user ? req.user.displayName: ''
 })
}
});
}

module.exports.displayAddPage = (req,res,next)=>{

    res.render('JobSearch/add',{title:'Add a Job!'})
    
     }