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

const getProductByIdFromDB = async (productId: string) => {
  const result = await Product.findById({ _id: productId });
  return result;
};

const updateProductByIdFromDB = async (productId: string, body: TProducts) => {
  const filter = { _id: productId };
  const result = await Product.findOneAndUpdate(filter, body, { new: true });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductFromDb,
  getProductByIdFromDB,
  updateProductByIdFromDB,
};
