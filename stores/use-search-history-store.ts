import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";

export interface InitialState {
  history: string[];
  addToHistory: (search: string) => void;
  removeFromHistory: (search: string) => void;
}

const SecureStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await SecureStore.getItemAsync(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await SecureStore.deleteItemAsync(name);
  },
};

export const useSearchHistoryStore = create<InitialState>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (search: string) =>
        set((state) => {
          if (state.history.length === 4) {
            state.history.shift();
          }

          return {
            history: [...new Set([...state.history, search])],
          };
        }),
      removeFromHistory: (search: string) =>
        set((state) => ({
          history: state.history.filter((item) => item !== search),
        })),
    }),
    {
      name: "search-history",
      storage: createJSONStorage(() => SecureStorage),
    },
  ),
);
