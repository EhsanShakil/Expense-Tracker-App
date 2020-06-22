import React from "react";
import Balance from "./Components/Balance";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import TransactionHistory from "./Components/TransactionHistory";
import AddTransaction from "./Components/AddTransaction";
import GlobalProvider from "./Context/GlobalState";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <GlobalProvider className="container">
      <Header />
      <div className="balance">
        <Balance />
        <Income />
        <Expense />
      </div>
      <div className="transaction">
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
