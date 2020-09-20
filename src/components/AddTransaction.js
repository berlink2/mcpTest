import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext';
import './AddTransaction.scss'
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(AppContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.ceil(Math.random() * 1000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div >
          <label htmlFor="text">Detail</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter transaction details..." />
        </div>
        <div >
          <label htmlFor="amount"
            >Amount <br />
            (- expense, + income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Add new transaction</button>
      </form>
    </>
  )
}
