import Product from "../models/product.js";
import { isAdmin } from "./UserController.js";

export function createProduct(req, res) {
  if (!isAdmin(req)) {
    res.json({
      message: "Please login as admin to add product",
    });
  }
  const newProductData = req.body;
  const newProduct = new Product(newProductData);
  newProduct.save()
    .then(() => {
      res.json({
        message: "Product created successfully",
      });
    })
    .catch((Error) => {
      res.json({
        message: Error,
      });
    });
}


export function getProducts(req,res) {
    Product.find({}).then((products)=>{
        res.json(products);
    })
    
}

export function deleteProducts(req,res) {
    
}