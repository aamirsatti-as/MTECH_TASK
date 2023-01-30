const Product = require("../models/product.js")

module.exports = {
    AddProduct: async (req, res) => {
        console.log('inside add')
        console.log(req.body)
        const { Product_Name, Product_Quality, Product_Price } = req.body;
        console.log(Product_Name, Product_Quality, Product_Price)
        const product = new Product({ Product_Name, Product_Quality, Product_Price })
        const save = await product.save()
        return res.status(200).json({ message: 'Product Added Successfully' });
    },
    DeleteProduct: async (req, res) => {
        console.log('inside delete')
        const delet = Product.deleteOne({ _id: req.params.id }).then((req, res) => {
            console.log('Deleted Successfully')
        }).catch(err => {
            console.log('Deleted Failed')
        })
    },
    GetProducts: async (req, res) => {
        
        let product = await Product.find();
        if (product)
            res.status(200).json({product})
        else
            res.json({"msg":"something went wrong"})
},
UpdateProduct: async (req, res) => {
    console.log(req.body)
    const { Product_Name, Product_Quality, Product_Price } = req.body;
    try {
        const data = await Product.findByIdAndUpdate({ _id: req.params.id }, { Product_Name: Product_Name, Product_Quality: Product_Quality, Product_Price: Product_Price}, { new: true });
        if (data) {
            return res.status(200).json({ message: "Updated Successfully" });
        }
        else {
            return res.status(422).json({ message: "Something Went wrong.Try Again" });
        }
    } catch (err) {
        console.log(err);
    }

}
}