import { create } from "zustand";

export type CoinTypes = {
  coin: Array<Coin>;
  setCoin: (data: Array<Coin>) => void;
};

export type Coin = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  total_volume: number;
  market_cap: number;
  price_change_percentage_24h: number;
  price_change_24h: number;
  fully_diluted_valuation: number;
  total_supply: number;
  symbol: string;
};
export const useCoin = create<CoinTypes>((set) => ({
  coin: [],
  setCoin: (data) => set({ coin: data }),
}));

type ValueType = {
  SearchValue: string;
};

type Action = {
  setSearchValue: (value: ValueType["SearchValue"]) => void;
  emptyValue: () => void;
};
export const useSearchValue = create<ValueType & Action>((set) => ({
  SearchValue: "",
  setSearchValue: (value) => set(() => ({ SearchValue: value })),
  emptyValue: () => set(() => ({ SearchValue: "" })),
}));

type FavType = {
  favortied: boolean;
  setFavorited: () => void;
};

export const useFavorite = create<FavType>((set) => ({
  favortied: false,
  setFavorited: () => {
    set((state) => ({ favortied: !state.favortied }));
  },
}));
