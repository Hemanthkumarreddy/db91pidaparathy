var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tshirt_controller = require('../controllers/tshirt'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/tshirt', tshirt_controller.tshirt_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/tshirt/:id', tshirt_controller.tshirt_delete); 
 
// PUT request to update Costume. 
router.put('/tshirt/:id', 
tshirt_controller.tshirt_update_put); 
 
// GET request for one Costume. 
router.get('/tshirt/:id', tshirt_controller.tshirt_detail); 
 
// GET request for list of all Costume items. 
router.get('/tshirt', tshirt_controller.tshirt_list); 
 
module.exports = router;