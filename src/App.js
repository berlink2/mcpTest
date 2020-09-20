import React from 'react';
import './App.scss';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { SaveClearTransactions } from './components/SaveClearTransactions';
import { AppProvider } from './context/AppContext';
import logo from './assets/mcpayment-logo.png';
function App() {
  return (
    <AppProvider>
      <div className="container">
        <div className="logo">

      <img  width="75" src={logo}/>
        </div>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <SaveClearTransactions />
      </div>
    </AppProvider>
  );
}

export default App;
