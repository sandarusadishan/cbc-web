import Product from "../models/product.js";

export function createProduct(req, res) {

    if (is) {
        
    }
  const newProductData = req.body;
  const newProduct = new Product(newProductData);
  Product.save()
    .then(() => {
      res.json({
        message: "Product created successfully",
      });
    })
    .catch((Error) => {
      res.json({
        message: "Error creating product",
      });
    });
}
