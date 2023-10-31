'use strict';

function converter(sum, curOriginal, curConvert) {
  const exchangeRates = [
    {
      currency: 'RUB',
      rates: {
        USD: 97.32, // сколько Р в USD
        EUR: 102.63,
        UAH: 2.68,
      },
    },
    {
      currency: 'USD',
      rates: {
        RUB: 0.01027854866, // сколько $ в рубле
        EUR: 1.05,
        UAH: 0.027,
      },
    },
    {
      currency: 'UAH',
      rates: {
        RUB: 0.37, // сколько UAH в Р
        EUR: 38.33,
        USD: 36.38,
      },
    },
  ];
  let out = 0;
  let formatter;

  exchangeRates.forEach((exchangeObj) => {
    if (exchangeObj.currency.toUpperCase() === curOriginal.toUpperCase()) {
      formatter = new Intl.NumberFormat('ru', {
        style: 'currency',
        currency: curConvert.toUpperCase(),
      });
      const value = exchangeObj.rates[curConvert.toUpperCase()];
      out = sum / value;
    }
  });
  return formatter ? formatter.format(out) : 0;
}

console.log('Convert RUB to...');
console.log(converter(100, 'rub', 'usd'));
console.log(converter(100, 'rub', 'eur'));
console.log(converter(100, 'rub', 'uah'));

console.log('---');
console.log('Convert USD to...');
console.log(converter(100, 'usd', 'rub'));
console.log(converter(100, 'usd', 'eur'));
console.log(converter(100, 'usd', 'uah'));

console.log('---');
console.log('Convert UAH to...');
console.log(converter(100, 'uah', 'rub'));
console.log(converter(100, 'uah', 'eur'));
console.log(converter(100, 'uah', 'usd'));
