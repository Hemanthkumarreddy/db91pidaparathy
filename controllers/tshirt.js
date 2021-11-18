var tshirt = require('../models/tshirt');

// List of all tshirts 
exports.tshirt_list = async function (req, res) {
    try {
        thetshirt = await tshirt.find();
        res.send(thetshirt);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.tshirt_view_all_Page = async function (req, res) {
    try {
        thetshirt = await tshirt.find();
        res.render('tshirt', { title: 'tshirt Search Results', results: thetshirt });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific tshirt. 
exports.tshirt_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: tshirt detail: ' + req.params.id);
};

// Handle tshirt create on POST. 
exports.tshirt_create_post = async function (req, res) {
    console.log(req.body)
    let document = new tshirt();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"tshirt_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color;
    document.brand = req.body.brand;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle tshirt delete form on DELETE.
exports.tshirt_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await tshirt.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle tshirt update form on PUT. 
exports.tshirt_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: tshirt update PUT' + req.params.id);
};

// Handle a show one view with id specified by query 
exports.tshirt_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await tshirt.findById(req.query.id)
        res.render('tshirtdetail',
            { title: 'tshirt Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a tshirt. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.tshirt_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('tshirtcreate', { title: 'tshirt Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a tshirt. 
// query provides the id 
exports.tshirt_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await tshirt.findById(req.query.id) 
        res.render('tshirtupdate', { title: 'tshirt Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.tshirt_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await tshirt.findById(req.query.id) 
        res.render('tshirtdelete', { title: 'tshirt Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 