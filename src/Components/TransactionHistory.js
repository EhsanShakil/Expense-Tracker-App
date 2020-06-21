import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h2>Transaction History</h2>
      {transactions.map((transaction, index) => (
        <div key={index}>
          <li>
            {transaction.description} <span>{transaction.amount}</span>
          </li>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
