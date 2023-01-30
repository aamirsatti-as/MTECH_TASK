var express = require('express');
var router = express.Router();
const control = require('../controller/productController.js')
const Product = require("../models/product.js")

router.get('/', function(req, res,next) {
    res.send('Hello from Profile');
});
// router.get('/aa', function(req, res) {
//     res.send('Hello from Profile22');
// });
// console.log('a')
router.post('/addProduct',control.AddProduct)
router.get('/getProduct',control.GetProducts)
router.delete('/deleteProduct/:id',control.DeleteProduct)
router.put('/updateProduct/:id',control.UpdateProduct)
module.exports = router;