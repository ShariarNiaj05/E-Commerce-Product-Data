import { TOrder } from "./orders.interface";
import { Order } from "./orders.model";

const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

const getOrderFromDb = async (email = {}) => {
  let result;

  if (email) {
    result = await Order.find(email);
  } else {
    result = await Order.find();
  }
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getOrderFromDb,
};
