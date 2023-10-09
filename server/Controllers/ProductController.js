const { Error } = require("mongoose");
const ProductModel = require("../Models/ProductModel");
const ErrorHandler = require("../Utils/ErrorHandler");
const ApiFeature = require("../Utils/ApiFeature");

// ========================Create Product fROM Admin Side==========================
exports.createProduct = async (req, res, next) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    next(error);
  }
};

// ============================Get All Product ===================================
exports.getAllProducts = async (req, res) => {
  try {
    //---ApiFetcher ye class ha ju Utils ma folder apifeatures file ma define ha.As ma Db and res.query ye do value ko pass kia ha.-----
    const ApiFeature = new ApiFeature(ProductModel.find.lean(), res.query);
    const Products = await ProductModel.find().lean();

    res.status(200).json({
      message: "Successfully Get All Products from Database",
      Products,
    });
  } catch (error) {
    return next(error);
  }
};

// ==========================Update Product ===================================
exports.updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    // Find the product by ID first
    let product = await ProductModel.findById(productId);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    // Now, update the product with the new data
    product = await ProductModel.findByIdAndUpdate(productId, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    return res
      .status(200)
      .json({ message: "Product updated successfully", product });
  } catch (error) {
    return next(error);
  }
};

// ==========================Delete Single Product Item===================================
exports.deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    const findProductId = await ProductModel.findByIdAndRemove(productId);

    if (!findProductId) {
      return next(new ErrorHandler("Product not found In Database", 404));
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(new ErrorHandler("Failed to delete product item", 505));
  }
};

// ==========================Single Product Get===================================
exports.getSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    const SingleProduct = await ProductModel.findById(productId);

    if (!SingleProduct) {
      return next(new ErrorHandler("Product not found Database", 404));
    }

    res
      .status(200)
      .json({ message: "Single Product Get Successfully", SingleProduct });
  } catch (error) {
    next(error);
  }
};
