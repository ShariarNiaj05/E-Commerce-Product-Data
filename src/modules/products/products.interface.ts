export type TVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProducts = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variant: TVariant[];
  inventory: TInventory;
};

/* 
name (string):
The name of the product.
description (string):
A brief description of the product.
price (number):
The price of the product.
category (string):
The category to which the product belongs.
tags (array of strings):
An array of tags or keywords associated with the product.
variants (array of objects):
An array containing different variants or options of the product, such as size, color, or style.
type (string): The type of variant (e.g., size, color).
value (string): The specific value of the variant (e.g., "Small", "Red").
inventory (object):
An object representing the product's inventory details.
quantity (number): The available quantity of the product in stock.
inStock (boolean): Indicates whether the product is currently in stock. */
