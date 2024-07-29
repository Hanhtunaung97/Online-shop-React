import products from "./products";

const carts = [
  {
    id: 1,
    product: products[0],
    quantity: 2,
    cost: products[0].price * 2,
  },
  {
    id: 2,
    product: products[5],
    quantity: 4,
    cost: products[0].price * 4,
  },
];
export default carts;
