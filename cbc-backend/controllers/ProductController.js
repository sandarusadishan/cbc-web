//200 ok server code
//500 server fault
//400 client request fault
//404 wrong address
//403 othentication part is wrong

import Product from "../models/product.js";

export function getProducts(req, res) {
  Product.find().then((productlist) => {
    [
      res.json({
        List: productlist,
      }),
    ];
  });
}

export function createProducts(req, res) {
  const product = new Product(req.body);
  product
    .save()
    .then(() => {
      res.json({
        message: "product created",
      });
    })
    .catch(() => {
      res.json({
        message: "product not created",
      });
    });
}

export function deleteProducts(req, res) {
  Product.deleteOne({ name: req.body.name }).then(() => {
    res.json({
      message: " product deleted successfully",
    });
  }).catch(()=>{
    res.json({
      message : "product not deleted"
    })
  })
}
