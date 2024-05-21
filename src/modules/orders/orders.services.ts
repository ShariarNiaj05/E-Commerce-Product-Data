import { TOrder } from "./orders.interface";
import { Order } from "./orders.model";

const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
