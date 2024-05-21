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

const getOrders = async (req: Request, res: Response) => {
  let result;
  try {
    const { email } = req.query;
    console.log(email);
    if (email) {
      const searchQuery = {
        $or: [{ email: { $regex: email, $options: "i" } }],
      };
      result = await OrderServices.getOrderFromDb(searchQuery);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      result = await OrderServices.getOrderFromDb();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
    console.log(result);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || "Order fetched operation failed",
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
  getOrders,
};
