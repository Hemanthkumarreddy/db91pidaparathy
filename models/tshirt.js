const mongoose = require("mongoose") 
const tshirtSchema = mongoose.Schema({ 
 color : String, 
 brand : String, 
 price : Number 
}) 
 
module.exports = mongoose.model("tshirt", tshirtSchema)