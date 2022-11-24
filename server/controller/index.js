var express = require('express');
var router = express.Router();
module.exports.displayHomepage = function(req, res, next) {
    res.render('index', {   title: "Home"  });
  }


  module.exports.displayAboutPage = (req,res,next)=>{
    res.render('index', {title:'About'});
  }

  module.exports.displayProductPage = (req,res,next)=>{
    res.render('index', {title:'Products'});
  }

  module.exports.displayServicePage = (req,res,next)=>{
    res.render('index', {title:'Services'});
  }

  module.exports.displayContactPage = (req,res,next)=>{
    res.render('index', {title:'Contact'});
  }