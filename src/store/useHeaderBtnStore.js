import { create } from "zustand";

const btnInfo = {};
const useHeaderBtnStore = create((set) => ({
  btnInfo: btnInfo,
  setBtnInfo: (info) => set({ btnInfo: info }),
}));

export default useHeaderBtnStore;
