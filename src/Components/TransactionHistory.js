import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Table from "react-bootstrap/Table";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h2>Transaction History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Delete Transaction</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, id) => (
            <tr>
              <td key={id}>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
