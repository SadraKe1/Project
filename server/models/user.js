let mongoose= require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');


let User = mongoose.Schema({
    username:
    {
      type:String,
      default:"",
      trim:true,
      required:'Username is required'
    },

    /*
    password:
    {
      type:String,
      default:"",
      trim:true,
      required:'password is required'
    }*/

    displayName:
    {
      type:String,
      default:"",
      trim:true,
      required:'Display Name is required'
    },

    created:{
        type:Date,
        default: Date.now
    },

    update:{
        type:Date,
        default: Date.now
    }
},
{
    collection: "user" //creates the collection job searches
}

)

//config options for user model
let options =({MissingPasswordError:'wrong/missing password'})
User.plugin(passportLocalMongoose,options);
module.exports.User = mongoose.model('User',User);
