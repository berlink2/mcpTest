import React, {useContext} from 'react';
import './Transaction.scss'
import { AppContext } from '../context/AppContext';
import { formatMoney } from '../utils/formatMoney'
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(AppContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign} {formatMoney(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
