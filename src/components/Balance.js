import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { formatMoney } from '../utils/formatMoney'
export const Balance = () => {
  const { transactions } = useContext(AppContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Total Balance</h4>
    <h1>{formatMoney(total)}</h1>
    </>
  )
}
