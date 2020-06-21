import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h2>Transaction History</h2>
      {transactions.map((transaction, id) => (
        <div key={id}>
          <ol>
            {transaction.description}{" "}
            <span>
              {transaction.amount}{" "}
              <button onClick={() => deleteTransaction(transaction.id)}>
                X
              </button>
            </span>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
