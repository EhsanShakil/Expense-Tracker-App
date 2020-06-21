import React, { useContext } from "react";
import { GlobalCOntext, GlobalContext } from "../Context/GlobalState";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((total, item) => (total += item), 0);
  return (
    <div>
      <h2>Current Balance</h2>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
