let mongoose= require('mongoose');

//create a JobSearch model

let JobSearchModel=mongoose.Schema({

    jobtitle:String, // holds a string value for job title for the user to enter
    requirements:String, // holds a string value for requirement for the user to enter
    hourlysalary:String, // holds a string value for houlry salary for the user to enter
    availability: String, // holds a string value for availablility for the user to enter
},
{
collection: "JobSearchs" //creates the collection job searches
}
);
module.exports = mongoose.model('JobSearch',JobSearchModel);

