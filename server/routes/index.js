var express = require('express');
var router = express.Router();
let indexController=require('../controller/index');


/* GET home page. */
router.get('/',indexController.displayHomepage);
/* GET home page. */
router.get('/home',indexController.displayHomepage);

/* GET about page. */
router.get('/about',indexController.displayAboutPage);

/* GET products page. */
router.get('/products',indexController.displayProductPage);

/* GET services page. */
router.get('/services',indexController.displayServicePage);

//Get router for login page
router.get('/login', indexController.displayLoginPage);
//post router for login page
router.post('/login', indexController.processLoginPage);

//Get router for registration page
router.get('/register', indexController.displayRegisterPage);
//post router for registration page
router.post('/register', indexController.processRegisterPage);

//Get router for logout page
router.get('/logout', indexController.performLogout);

/* GET CONTACT page. */
router.get('/contact',indexController.displayContactPage);


module.exports = router;
