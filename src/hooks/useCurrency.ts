import { useEffect, useMemo, useState } from 'react';

import { CURRENCIES } from '../constants';
import { FreeCurrencyAPI } from '../infras/FreeCurrencyAPI'
import { CurrencyExchange } from '../types';

export type CurrencyName = (typeof CURRENCIES)[keyof typeof CURRENCIES];

const dumydata = {
  AUD: 1.5500202556,
  BGN: 1.8094902183,
  BRL: 4.9557605214,
  CAD: 1.3569901622,
  CHF: 0.887540177,
  CNY: 7.1946709734,
  CZK: 23.5735827178,
  DKK: 6.9611112465,
  EUR: 0.9339501857,
  GBP: 0.7943900859,
  HKD: 7.8192308265,
  HRK: 7.0226009572,
  HUF: 361.0246729887,
  IDR: 15580.227944212,
  ILS: 3.6666906626,
  INR: 83.0849650828,
  ISK: 138.7251806201,
  JPY: 150.7451564865,
  KRW: 1339.9375720651,
  MXN: 17.2158832211,
  MYR: 4.7661605243,
  NOK: 10.6734911174,
  NZD: 1.6515003015,
  PHP: 55.9669502122,
  PLN: 4.0504805127,
  RON: 4.6468806767,
  RUB: 91.4888591674,
  SEK: 10.5811820055,
  SGD: 1.3503501366,
  THB: 36.0739447926,
  TRY: 30.7194061278,
  USD: 1,
  ZAR: 19.0982837088,
};

export default function useCurrency() {
  const [currentExchange, updateCurrentExhange] = useState<CurrencyExchange>(dumydata);

  useEffect(() => {
    FreeCurrencyAPI.getCurrentCurrencyExchange().then(
      (response) => response && updateCurrentExhange(response)
    );
  },[updateCurrentExhange])

  function convert(amount: number, src: CurrencyName, dst: CurrencyName) {
    const ratio = currentExchange[dst] / currentExchange[src];
    return amount * ratio;
  }

  const availableCurrencies = useMemo(() => {
    const result = [];
    for (const currency in CURRENCIES) result.push(currency)
    return result;
  }, [])

  return { currentExchange, convert, availableCurrencies };
}