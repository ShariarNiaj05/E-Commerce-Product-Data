import { Request, Response } from "express";
import { OrderServices } from "./orders.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await OrderServices.createOrderIntoDB(body);
    // console.log("body data", body);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Unable to Process the Request To Create Order",
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
};
