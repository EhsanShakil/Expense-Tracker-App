import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Card from "react-bootstrap/Card";
const Expense = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.filter((transaction) => transaction.amount < 0);
  const income = amount.map((income) => income.amount);
  const total = income.reduce((total, item) => (total += item), 0);
  return (
    <div className="expensecomponent">
      <Card border="danger" style={{ width: "18rem", borderWidth: "4px" }}>
        <Card.Body>
          <Card.Title>
            <h2>Expense</h2>
          </Card.Title>
          <Card.Text>
            <h3>
              <b>-${Math.abs(total)}</b>
            </h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Expense;
