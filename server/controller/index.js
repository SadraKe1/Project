var express = require('express');
var router = express.Router();
//requests home page and displays it
module.exports.displayHomepage = function(req, res, next) {
    res.render('index', {   title: "Home"  });
  }

//requests about page and displays it
  module.exports.displayAboutPage = (req,res,next)=>{
    res.render('index', {title:'About'});
  }
//requests product page and displays it
  module.exports.displayProductPage = (req,res,next)=>{
    res.render('index', {title:'Products'});
  }
//requests service page and displays it
  module.exports.displayServicePage = (req,res,next)=>{
    res.render('index', {title:'Services'});
  }
//displays comments page//
  module.exports.displayContactPage = (req,res,next)=>{
    res.render('index', {title:'Contact'});
  }