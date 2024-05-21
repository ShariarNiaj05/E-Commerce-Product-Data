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
  try {
    const result = await ProductServices.getProductFromDb();
    console.log(result);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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

// get product by id
const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getProductByIdFromDB(id);
    console.log(id);
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

export const ProductController = {
  createProduct,
  getProduct,
  getProductById,
};
