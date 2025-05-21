import { create } from "zustand";

type TestStore = {
  contador: number;
  incrementar: () => void;
};

export const useTestStore = create<TestStore>((set) =>({
    contador: 0,
    incrementar: () => set((state) => ({contador: state.contador+1})),
}))