var express = require('express');
var router = express.Router();

const tshirt_controlers= require('../controllers/tshirt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tshirt', { title: 'Search Results tshirt' });
});

/* Get a detail tshirt page*/
router.get('/detail',tshirt_controlers.tshirt_view_one_Page);

/* GET create tshirt page */ 
router.get('/create', tshirt_controlers.tshirt_create_Page);

/* GET create update page */ 
router.get('/update', tshirt_controlers.tshirt_update_Page);

/* GET create costume page */ 
router.get('/delete', tshirt_controlers.tshirt_delete_Page); 

module.exports = router;
