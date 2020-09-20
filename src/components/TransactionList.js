import React, { useContext } from 'react';
import './TransactionList.scss'
import { Transaction } from './Transaction';

import { AppContext } from '../context/AppContext';

export const TransactionList = () => {
  const { transactions } = useContext(AppContext);

  return (
    <>
      <h3>Budget History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
