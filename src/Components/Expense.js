import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Expense = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.filter((transaction) => transaction.amount < 0);
  const income = amount.map((income) => income.amount);
  const total = income.reduce((total, item) => (total += item), 0);
  return (
    <div>
      <h2>Expense</h2>
      <h1>-${Math.abs(total)}</h1>
    </div>
  );
};

export default Expense;
