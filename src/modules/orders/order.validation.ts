import { z } from "zod";

const orderValidationSchema = z.object({
  email: z.string({ message: "email is required" }),
  productId: z.string({ message: "product Id is required" }),
  price: z.number({ message: "price is required" }),
  quantity: z.number({ message: "quantity is required" }),
});

export default orderValidationSchema;
