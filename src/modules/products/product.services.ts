import { TProducts } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (productData: TProducts) => {
  const result = await Product.create(productData);
  return result;
};

const getProductFromDb = async () => {
  const result = await Product.find();
  return result;
};

const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductFromDb,
  getProductByIdFromDB,
};
