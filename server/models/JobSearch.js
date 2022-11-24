let mongoose= require('mongoose');

//create a JobSearch model

let JobSearchModel=mongoose.Schema({

    jobtitle:String, 
    requirements:String,
    hourlysalary:String,
    availability: String,
},
{
collection: "JobSearchs"
}
);
module.exports = mongoose.model('JobSearch',JobSearchModel);

