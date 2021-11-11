var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tshirt_controller = require('../controllers/tshirt'); 
const tshirt_controlers= require('../controllers/tshirt');

router.get('/', tshirt_controlers.tshirt_view_all_Page ); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// tshirt ROUTES /// 
 
// POST request for creating a tshirt.  
router.post('/tshirt', tshirt_controller.tshirt_create_post); 
 
// DELETE request to delete tshirt. 
router.delete('/tshirt/:id', tshirt_controller.tshirt_delete); 
 
// PUT request to update tshirt. 
router.put('/tshirt/:id', 
tshirt_controller.tshirt_update_put); 
 
// GET request for one tshirt. 
router.get('/tshirt/:id', tshirt_controller.tshirt_detail); 
 
// GET request for list of all tshirt items. 
router.get('/tshirt', tshirt_controller.tshirt_list); 

 
module.exports = router;