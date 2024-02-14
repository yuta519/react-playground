import axios from "axios";

import { CurrencyExchange } from "../types";

async function getCurrentCurrencyExchange() {
  const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.FREECURRENCY_API_KEY}`);

  try {
    if (response.status !== 200) return ;
    return response.data.data as CurrencyExchange;
  } catch (e) {
    return
  }
}
  

export const FreeCurrencyAPI = {
    getCurrentCurrencyExchange,
}