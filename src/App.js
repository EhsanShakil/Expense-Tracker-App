import React from "react";
import Balance from "./Components/Balance";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import TransactionHistory from "./Components/TransactionHistory";
import AddTransaction from "./Components/AddTransaction";
import GlobalProvider from "./Context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker</h1>
      <div className="balance">
        <Balance />
        <Income />
        <Expense />
      </div>
      <TransactionHistory />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
