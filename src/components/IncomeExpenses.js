import React, { useContext } from 'react';
import './IncomeExpense.scss'
import { AppContext } from '../context/AppContext';
import { formatMoney } from '../utils/formatMoney'
export const IncomeExpenses = () => {
  const { transactions } = useContext(AppContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)


  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)
  )

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">+ {formatMoney(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus"> {formatMoney(expense)}</p>
        </div>
      </div>
  )
}
