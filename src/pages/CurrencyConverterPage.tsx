// reference: Beginner Question 4 https://codeinterview.io/blog/reactjs-coding-interview-questions/
// Develop a currency converter application that allows users to input an amount in one currency
// and convert it to another 
import { useEffect, useState } from "react";
import { CURRENCIES } from '../constants';
import useCurrency, { CurrencyName } from "../hooks/useCurrency"
// Free APIs 
// https://exchangeratesapi.io/
// https://freecurrencyapi.com/ 

type CurrencyExchange = {
  src?: CurrencyName;
  dst?: CurrencyName;
  amount: number;
  convertedAmount: number;
}

const initialState: CurrencyExchange = {
  src: CURRENCIES.USD,
  amount: 0,
  convertedAmount: 0
}

export default function CurrencyConverterPage() {
  const { currentExchange, availableCurrencies, convert } = useCurrency()
  const [currencyExchange, update] = useState<CurrencyExchange>(initialState)

  useEffect(() => {
    const { amount, src, dst } = currencyExchange;
    if (!amount || !src || !dst) return;

    const convertedAmount = convert(amount, src, dst);
    if (currencyExchange.convertedAmount === convertedAmount) return;

    update((prev) => ({ ...prev, convertedAmount })); 
  }, [currencyExchange]);

  const handleChange = (e: any) => 
   update((prev) => ({...prev, [e.target.name]: e.target.value}));

  return (
    <>
      <div>
        When USD is ${currentExchange.USD}, 
      </div>
      <ul>
        <li>AUD: {currentExchange.AUD}</li>
        <li>EUR: {currentExchange.EUR}</li>
      </ul>

      <div>
        <div>
          <label>Currency Converter</label>
        </div>

        <div>
          <label>From:</label>
          <select name="src" value={currencyExchange.src} onChange={handleChange}>
            <option value="">---</option>
            {availableCurrencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div>
          <label>To:</label>
          <select name="dst" value={currencyExchange.dst ?? ""} onChange={handleChange}>
            <option value="">---</option>
            {availableCurrencies.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
        <div>
          <input type="text" name="amount" value={currencyExchange.amount} onChange={handleChange} />
        </div>
        <div>Result: {currencyExchange.convertedAmount}</div>
      </div>
    </>
  );
}
