const mongoose = require("mongoose") 
const tshirtSchema = mongoose.Schema({ 
 color : String, 
 brand : String, 
 cost : Number 
}) 
 
module.exports = mongoose.model("tshirt", tshirtSchema)