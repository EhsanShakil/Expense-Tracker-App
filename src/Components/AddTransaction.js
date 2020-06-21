import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  console.log(text);
  return (
    <div>
      <h2>Add Transaction</h2>
      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="transactionamount">Transaction Amount</label>
        <input
          type="number"
          id="transactionamount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddTransaction;
