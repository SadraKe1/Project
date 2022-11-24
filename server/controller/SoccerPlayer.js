let express = require('express');
let router = express.Router();
let mongoose= require ('mongoose');

//connect with SoccerPlayer model
let SoccerPlayer = require('../models/SoccerPlayer');
// crud!

module.exports.displaySoccerPlayerList= (req,res,next)=>{
SoccerPlayer.find((err,SoccerPlayerlist)=>{
if (err)
{

    return console.error(err);
}else{

    res.render('SoccerPlayer/list',{
title:'SoccerPlayers',
SoccerPlayerlist: SoccerPlayerlist

    })
}


});



}

module.exports.displayAddPage = (req,res,next)=>{

    res.render('SoccerPlayer/add',{title:'Add SoccerPlayer'})
    
     }