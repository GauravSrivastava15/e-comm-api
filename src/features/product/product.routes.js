//To manage routes/paths to ProductController

import express from "express";
import ProductController from "./product.controller.js";
import { upload } from "../../middlewares/fileupload.middleware.js";

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);

productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);

productRouter.post("/rate",productController.rateProduct)

productRouter.get("/filter", productController.filterProducts);
productRouter.get("/:id", productController.getOneProduct);

//localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1

export default productRouter;
