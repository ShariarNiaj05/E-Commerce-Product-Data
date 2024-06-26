import { TProducts } from "./products.interface";
import { Product } from "./products.model";

const createProductIntoDB = async (productData: TProducts) => {
  const result = await Product.create(productData);
  return result;
};

const getProductFromDb = async (searchTerm = {}) => {
  let result;

  if (searchTerm) {
    result = await Product.find(searchTerm);
  } else {
    result = await Product.find();
  }
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

const deleteProductFromDB = async (productId: string) => {
  const filter = { _id: productId };
  const result = await Product.deleteOne(filter);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductFromDb,
  getProductByIdFromDB,
  updateProductByIdFromDB,
  deleteProductFromDB,
};
