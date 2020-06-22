import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    // { id: 1, description: "Income 1", amount: 1000 },
    // { id: 2, description: "Income 2", amount: 2000 },
    // { id: 3, description: "Income 3", amount: 2000 },
    // { id: 4, description: "Income 4", amount: 2000 },
    // { id: 5, description: "Expense 1", amount: -2000 },
    // { id: 6, description: "Income 5", amount: 5000 },
  ],
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
