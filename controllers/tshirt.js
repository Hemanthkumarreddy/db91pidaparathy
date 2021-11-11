var tshirt = require('../models/tshirt'); 
 
// List of all tshirts 
exports.tshirt_list = async function(req, res) { 
    try{ 
        thetshirt = await tshirt.find(); 
        res.send(thetshirt); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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