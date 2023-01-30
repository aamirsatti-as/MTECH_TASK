var mongoose = require('mongoose');

var schema = mongoose.Schema;

var ProductSchema = new schema({
    Product_Name:{
        type: String,
        required: true,
    },
    Product_Quality: {
        type: String,
        required: true,
    },
    Product_Price: {
        type: String,
        required: true,
    },
}
);
module.exports = mongoose.model('Product', ProductSchema);