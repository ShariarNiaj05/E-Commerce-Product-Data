import { Request, Response } from "express";
import { ProductServices } from "./product.services";

// create product or store product to the DB
const createProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await ProductServices.createProductIntoDB(body);
    // console.log("body data", body);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message:
        error.message || "Unable to Process the Request To Create Product",
      error: error,
    });
  }
};

// get product list from the DB
const getProduct = async (req: Request, res: Response) => {
  let result;
  try {
    const { searchTerm } = req.query;
    if (searchTerm) {
      const searchQuery = {
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { description: { $regex: searchTerm, $options: "i" } },
          { tags: { $regex: searchTerm, $options: "i" } },
        ],
      };
      result = await ProductServices.getProductFromDb(searchQuery);
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      result = await ProductServices.getProductFromDb();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
    console.log(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Products fetched operation failed",
      error: error,
    });
  }
};

// get product by id
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductByIdFromDB(productId);
    console.log(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Products fetched operation failed",
      error: error,
    });
  }
};

// update product by id
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const body = req.body;
    const result = await ProductServices.updateProductByIdFromDB(
      productId,
      body
    );

    console.log(result);
    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update product",
      error: error,
    });
  }
};

// delete product by id from db
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);

    console.log(result);
    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    } else {
      return res.status(500).json({ message: "Product couldn't be deleted" });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update product",
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
