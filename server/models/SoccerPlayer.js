let mongoose= require('mongoose');

//create a SoccerPlayer model

let SoccerPlayerModel=mongoose.Schema({

    name:String, 
    Team:String,
    DOB:String,
    Nationality: String,
    price : Number
},
{
collection: "SoccerPlayers"
}
);
module.exports = mongoose.model('SoccerPlayer',SoccerPlayerModel);

