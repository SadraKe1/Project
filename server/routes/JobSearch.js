let express = require('express');
let router = express.Router();
let mongoose= require ('mongoose');

//connect with JobSearch model 

let JobSearch = require('../models/JobSearch');
let JobSearchController=require('../controller/JobSearch');

function requireAuth(req,res,next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* Read */
router.get('/',JobSearchController.displayJobSearchList);



 //Add operation 
 
router.get('/add',requireAuth, JobSearchController.displayAddPage);

//post for add change this later 28:07 last vid
router.post('/add',(req,res,next)=>{

    let newJobSearch= JobSearch({
        "jobtitle":req.body.jobtitle,
        "requirements":req.body.requirements,
        "hourlysalary":req.body.hourlysalary,
        "availability":req.body.availability,
        "price":req.body.price
    });
    JobSearch.create(newJobSearch,(err,JobSearch)=>{
    if(err)
    {
    console.log(err);
    res.end(err);
    
    }
    else
    {
    res.redirect('/JobSearch-list');
    
    }
    })
    });


 //Edit operation
 router.get('/edit/:id',(req,res,next)=>{
let id = req.params.id;
JobSearch.findById(id,(err,JobSearchToEdit)=>{
if (err)
{

    console.log(err);
    res.end(err);
}
else{

    res.render('JobSearch/edit',{title:'Edit JobSearch',JobSearch:JobSearchToEdit});
}

})

 });
//post for edit 
router.post('/edit/:id',(req,res,next)=>{
let id=req.params.id;
let updateJobSearch=JobSearch({
"_id":id,
"jobtitle":req.body.jobtitle,
"requirements":req.body.requirements,
"hourlysalary":req.body.hourlysalary,
"availability":req.body.availability,
 "price":req.body.price



});
JobSearch.updateOne({_id:id},updateJobSearch,(err)=>{

if(err)
{

    console.log(err);
    res.end(err);
}
else{

    res.redirect('/JobSearch-list');
}

})


});


 //Delete Operation 
 router.get('/delete/:id',(req,res,next)=>{

let id= req.params.id;
JobSearch.deleteOne({_id:id},(err)=>{
    if(err)
    {
    
        console.log(err);
        res.end(err);
    }
    else{
    
        res.redirect('/JobSearch-list');
    }

})

 });

module.exports=router;
