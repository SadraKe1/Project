let express = require('express');
let router = express.Router();
let mongoose= require ('mongoose');

//connect with SoccerPlayer model 

let SoccerPlayer = require('../models/SoccerPlayer');
let SoccerPlayerController=require('../controller/SoccerPlayer');
/* Read */
router.get('/',SoccerPlayerController.displaySoccerPlayerList);



 //Add operation 
 
 router.get('/add',SoccerPlayerController.displayAddPage);

//post for add change this later 28:07 last vid
router.post('/add',(req,res,next)=>{

    let newSoccerPlayer= SoccerPlayer({
        "name":req.body.name,
        "Team":req.body.Team,
        "DOB":req.body.DOB,
        "Nationality":req.body.Nationality,
        "price":req.body.price
    });
    SoccerPlayer.create(newSoccerPlayer,(err,SoccerPlayer)=>{
    if(err)
    {
    console.log(err);
    res.end(err);
    
    }
    else
    {
    res.redirect('/SoccerPlayer-list');
    
    }
    })
    });


 //Edit operation
 router.get('/edit/:id',(req,res,next)=>{
let id = req.params.id;
SoccerPlayer.findById(id,(err,SoccerPlayerToEdit)=>{
if (err)
{

    console.log(err);
    res.end(err);
}
else{

    res.render('SoccerPlayer/edit',{title:'Edit SoccerPlayer',SoccerPlayer:SoccerPlayerToEdit});
}

})

 });
//post for edit 
router.post('/edit/:id',(req,res,next)=>{
let id=req.params.id;
let updateSoccerPlayer=SoccerPlayer({
"_id":id,
"name":req.body.name,
"Team":req.body.Team,
"DOB":req.body.DOB,
"Nationality":req.body.Nationality,
 "price":req.body.price



});
SoccerPlayer.updateOne({_id:id},updateSoccerPlayer,(err)=>{

if(err)
{

    console.log(err);
    res.end(err);
}
else{

    res.redirect('/SoccerPlayer-list');
}

})


});


 //Delete Operation 
 router.get('/delete/:id',(req,res,next)=>{

let id= req.params.id;
SoccerPlayer.deleteOne({_id:id},(err)=>{
    if(err)
    {
    
        console.log(err);
        res.end(err);
    }
    else{
    
        res.redirect('/SoccerPlayer-list');
    }

})

 });

module.exports=router;
