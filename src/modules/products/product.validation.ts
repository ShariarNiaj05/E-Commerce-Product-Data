import { z } from "zod";

const variantValidationSchema = z.object({
  type: z.string({ message: "type is required" }),
  value: z.string({ message: "value is required" }),
});

const inventoryValidationSchema = z.object({
  quantity: z.number({ message: "quantity is required" }),
  inStock: z.boolean({ message: "inStock is required" }),
});

const productValidationSchema = z.object({
  name: z.string({ message: "name is required" }),
  description: z.string({ message: "description is required" }),
  price: z.number({ message: "price is required" }),
  category: z.string({ message: "category is required" }),
  tags: z.array(z.string({ message: "tags is required" })), // // string[];
  variants: z.array(variantValidationSchema, {
    message: "variants is required",
  }),
  inventory: inventoryValidationSchema,
});

/* 

const productValidationSchema = z.object({
  email: z.string({ message: "email is required" }),
  productId: z.string({ message: "product Id is required" }),
  price: z.number({ message: "price is required" }),
  quantity: z.number({ message: "quantity is required" }),
}); */

export default productValidationSchema;
