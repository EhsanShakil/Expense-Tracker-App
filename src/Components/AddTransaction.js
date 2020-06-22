import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.round(Math.random() * 900000),
      description,
      amount: Number(amount),
    };
    addTransaction(newTransaction);

    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          required
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="transactionamount">Transaction Amount</label>
        <input
          required
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
