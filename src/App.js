import React from "react";
import Balance from "./Components/Balance";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import TransactionHistory from "./Components/TransactionHistory";
import AddTransaction from "./Components/AddTransaction";

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Balance />
      <Income />
      <Expense />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
