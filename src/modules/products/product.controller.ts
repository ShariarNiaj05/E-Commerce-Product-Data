import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
  try {
    console.log("logging req", req);
    const body = await req.body;
    console.log("body data", body);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: body,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message:
        error.message || "Unable to Process the Request To Create Student",
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
};
