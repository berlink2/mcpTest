import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext';
import './SaveClearTransactions.scss';

export const SaveClearTransactions = () =>{
    const { transactions, clearHistory } = useContext(AppContext);

    const handleSave = () =>{
        localStorage.setItem('history', JSON.stringify(transactions));
    }

    const handleClear = () =>{
        clearHistory();
    }

    return <>
    <button onClick={handleSave} className="btn">Save</button>
    <button onClick={handleClear} className="btn">Clear Budget History</button>
    </>
}