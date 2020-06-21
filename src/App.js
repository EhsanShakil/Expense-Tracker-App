import React from "react";
import Balance from "./Components/Balance";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import TransactionHistory from "./Components/TransactionHistory";
import AddTransaction from "./Components/AddTransaction";
import GlobalProvider from "./Context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker</h1>
      <Balance />
      <Income />
      <Expense />
      <TransactionHistory />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
