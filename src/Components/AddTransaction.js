import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.round(Math.random() * 900000),
      text,
      amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="transactionamount">Transaction Amount</label>
        <input
          type="number"
          id="transactionamount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn btn-primary">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
