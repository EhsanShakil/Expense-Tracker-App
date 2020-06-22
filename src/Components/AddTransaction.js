import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.round(Math.random() * 900000),
      description,
      amount: Number(amount),
    };
    addTransaction(newTransaction);

    setAmount("");
    setDescription("");
  };

  return (
    <div className="addtransaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">
          <b>Description:</b>
        </label>
        <br />
        <input
          required
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="transactionamount">
          <b>Transaction Amount:</b>
          <br />

          <span style={{ fontSize: "14px" }}>(Positive values for income)</span>
          <br />
          <span style={{ fontSize: "14px" }}>
            (Negative values for expense)
          </span>
        </label>

        <br />
        <input
          required
          type="number"
          id="transactionamount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <button className="btn btn-primary">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
