var express = require('express');
var router = express.Router();

const tshirt_controlers= require('../controllers/tshirt');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('tshirt', { title: 'Search Results tshirt' });
// });
router.get('/',tshirt_controlers.tshirt_view_all_Page);

/* Get a detail tshirt page*/
router.get('/detail',tshirt_controlers.tshirt_view_one_Page);

/* GET create tshirt page */ 
router.get('/create', secured,tshirt_controlers.tshirt_create_Page);

/* GET update tshirt page */ 
router.get('/update', secured,tshirt_controlers.tshirt_update_Page); 

/* GET delete tshirt page */ 
router.get('/delete', secured,tshirt_controlers.tshirt_delete_Page); 

module.exports = router;
