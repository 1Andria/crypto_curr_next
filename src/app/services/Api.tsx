import axios from "axios";
import { useCoin } from "./zustand";

export async function FetchData() {
  try {
    const params = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
    );
    useCoin.getState().setCoin(params.data);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}
