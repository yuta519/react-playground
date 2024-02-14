import axios from "axios";


async function getCurrentCurrencyExchange() {
  const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.FREECURRENCY_API_KEY}`);

  try {
    if (response.status !== 200) return;
    console.log(response);
  } catch (e) {

  }
}
  

export const FreeCurrencyAPI = {
    getCurrentCurrencyExchange,
}