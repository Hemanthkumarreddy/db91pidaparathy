var tshirt = require('../models/tshirt'); 
 
// List of all tshirt
exports.tshirt_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: tshirt list'); 
}; 
 
// for a specific tshirt. 
exports.tshirt_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: tshirt detail: ' + req.params.id); 
}; 
 
// Handle tshirt create on POST. 
exports.tshirt_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: tshirt create POST'); 
}; 
 
// Handle tshirt delete form on DELETE. 
exports.tshirt_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tshirt delete DELETE ' + req.params.id); 
}; 
 
// Handle tshirt update form on PUT. 
exports.tshirt_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: tshirt update PUT' + req.params.id); 
}; 