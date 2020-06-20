import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Add Transaction</h2>
      <div>
        <h2>Text</h2>
        <span>{text}</span>
        <input type="text" />
      </div>
      <div>
        <h2>Add Transaction</h2>
        <input type="number" />
      </div>
    </div>
  );
};

export default AddTransaction;
