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
