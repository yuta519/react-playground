import axios from "axios";

import { CurrencyExchange } from "../types";

async function getCurrentCurrencyExchange() {
  // const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.FREECURRENCY_API_KEY}`);
  const response = await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_oJ3yslJJUO0EDFkmYTumyAJN7UMy78qL3kz3OvbI');

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