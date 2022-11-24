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

/* GET CONTACT page. */
router.get('/contact',indexController.displayContactPage);


module.exports = router;
