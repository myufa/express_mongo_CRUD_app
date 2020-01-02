var Product = require("../models/product.model");

exports.product_create = (req, res, next) => {
    console.log(req.body);
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save((err) => {
        if(err){
            return next(err);
        }
        res.send('Product created succesfully')
    });
};

exports.product_details = (req, res, next) => {
    Product.findById(req.params.id, (err, product)=>{
        console.log(req.params.id);
        if(err) return next(err);
        res.send(product);
    });
};

exports.product_update = (req,res,next) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body},
        (err, product) => {
            if(err) return next(err);
            res.send("Product Updated");
        });

};

exports.product_delete = (req,res,next) => {
    Product.findByIdAndDelete(req.params.id, (err)=>{
        if(err) return next(err);
        res.send("Product Deleted");
    })
};

exports.test = (req, res)=>{
    res.send("Greetings from the test controller!");
};