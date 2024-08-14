import { create } from "zustand";

const categories = [
  { id: 0, name: "all", isActive: true },
  { id: 1, name: "electronics", isActive: false },
  { id: 2, name: "jewelry", isActive: false },
  { id: 3, name: "men's clothing", isActive: false },
  { id: 4, name: "women's clothing", isActive: false },
];

const useCategoriesStore = create((set) => ({
  categories: categories,
  categoryActive: (categoryId) =>
    set((prev) => ({
      categories: prev.categories.map((category) =>
        category.id === categoryId
          ? { ...category, isActive: true }
          : { ...category, isActive: false }
      ),
    })),
}));

export default useCategoriesStore;
