import { create } from "zustand";

const carts = [
  {
    id: 1,
    productId: 1,
    quantity: 1,
  },
  {
    id: 2,
    productId: 5,
    quantity: 2,
  },
];
const useCartStore = create((set) => ({
  carts: carts,
  addCart: (newCart) => set((prev) => ({ carts: [...prev.carts, newCart] })),
  addQuantity: (id) =>
    set((prev) => ({
      carts: prev.carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      ),
    })),
  subQuantity: (id) =>
    set((prev) => ({
      carts: prev.carts.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      ),
    })),
  removeCart: (id) =>
    set((prev) => ({ carts: prev.carts.filter((cart) => cart.id !== id) })),
}));

export default useCartStore;
