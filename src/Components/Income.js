import React, { useContext } from "react";
import { GlobalCnntext, GlobalContext } from "../Context/GlobalState";
const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.filter((transaction) => transaction.amount > 0);
  const income = amount.map((income) => income.amount);
  const total = income.reduce((total, item) => (total += item), 0);

  console.log(total);

  return (
    <div>
      <h2>Income</h2>
      <h1>+${total}</h1>
    </div>
  );
};

export default Income;
