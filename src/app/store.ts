import { create } from "zustand";

export interface IState {
  isAddHandleOpen: boolean;
  isAboutOpen: boolean;
  setIsAddHandleOpen: (value: boolean) => void;
  setIsAboutOpen: (value: boolean) => void;
}

export const useStore = create((set) => ({
  isAddHandleOpen: false,
  isAboutOpen: true,
  setIsAddHandleOpen: (value: boolean) => {
    set(() => ({
      isAddHandleOpen: value,
    }));
  },
  setIsAboutOpen: (value: boolean) => {
    set(() => ({
      isAboutOpen: value,
    }));
  },
}));
