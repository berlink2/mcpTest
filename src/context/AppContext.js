import React, { createContext, useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
        case 'CLEAR_HISTORY':
          return {
            ...state,
            transactions: action.payload
          }
      default:
        return state;
    }
  }


const initialState = {
  transactions: JSON.parse(localStorage.getItem('history')) || []
}


export const AppContext = createContext(initialState);


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function clearHistory() {
    localStorage.removeItem('history');
    dispatch({
      type: 'CLEAR_HISTORY',
      payload: []
    });
  }

  return (<AppContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
    clearHistory
  }}>
    {children}
  </AppContext.Provider>);
}