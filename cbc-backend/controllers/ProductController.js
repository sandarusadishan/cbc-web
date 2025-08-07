//200 ok server code
//500 server fault
//400 client request fault
//404 wrong address
//403 othentication part is wrong

import Product from "../models/product.js";

export function getProducts(req, res) {
  Product.find().then((productList) => {
    [
      res.json({
        list: productList,
      }),
    ];
  });
}

export function createProducts(req, res) {
  console.log(req.user);
  if (req.user == null) {
    res.json({
      message: "You aren't logged in",
    });
    return;
  }

  if (req.user.type != "admin") {
    res.json({
      message: "You are not admin",
    });
    return;
  }
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
  Product.deleteOne({ name: req.params.name })
    .then(() => {
      res.json({
        message: " product deleted successfully",
      });
    })
    .catch(() => {
      res.json({
        message: "product not deleted",
      });
    });
}

export function getProductByName(req, res) {
  const name = req.params.name;
  // res.json({
  //   message : "Product name is "+ name
  // })
  Product.find({ name: name })
    .then((productList) => {
      if (productList.length == 0) {
        res.json({
          message: "product not found",
        });
      } else {
        res.json({
          list: productList,
        });
      }
    })
    .catch(() => {
      res.json({
        message: "Error",
      });
    });
}
