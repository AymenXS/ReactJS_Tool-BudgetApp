import React, { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const currencies = [
    { symbol: '£', currency: 'Pound' },
    { symbol: '€', currency: 'Euro' },
    { symbol: '$', currency: 'Dollar' },
    { symbol: '₹', currency: 'Rupee' },
  ];

  const changeCurrency = (currency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: currency });
  };

  return (
    <div className="container">
      <select className="alert alert-secondary">
        {currencies.map(({ symbol, currency }) => {
          return (
            <option key={symbol} value={currency} onClick={() => changeCurrency(symbol)}>
              Currency: {`${symbol} ${currency}`}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Currency;
