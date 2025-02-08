import { create } from "zustand";

interface BoostStore {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useBoostStore = create<BoostStore>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
})); 