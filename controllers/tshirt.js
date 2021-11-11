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

// VIEWS 
// Handle a show all view 
exports.tshirt_view_all_Page = async function(req, res) { 
    try{ 
        thetshirt = await tshirt.find(); 
        res.render('tshirt', { title: 'tshirt Search Results', results: thetshirt }); 
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
 
// Handle Costume create on POST. 
exports.tshirt_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new tshirt(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color; 
    document.brand = req.body.brand; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// Handle tshirt delete form on DELETE. 
exports.tshirt_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tshirt delete DELETE ' + req.params.id); 
}; 
 
// Handle tshirt update form on PUT. 
exports.tshirt_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: tshirt update PUT' + req.params.id); 
}; 