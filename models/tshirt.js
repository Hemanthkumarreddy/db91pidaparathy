const mongoose = require("mongoose") 
const tshirtSchema = mongoose.Schema({ 
    color: {
        type: String,
        minLength: 50
    },
    brand: {
        type: String,
        minLength: 45
    },
    price: Number
}) 
 
module.exports = mongoose.model("tshirt", tshirtSchema)