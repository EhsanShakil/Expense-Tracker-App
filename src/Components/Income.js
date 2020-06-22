import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Card from "react-bootstrap/Card";
const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.filter((transaction) => transaction.amount > 0);
  const income = amount.map((income) => income.amount);
  const total = income.reduce((total, item) => (total += item), 0);

  return (
    <div className="incomecomponent">
      <Card border="primary" style={{ width: "18rem", borderWidth: "4px" }}>
        <Card.Body>
          <Card.Title>
            <h2>Income</h2>
          </Card.Title>
          <Card.Text>
            <h3>
              <b>+${total}</b>
            </h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Income;
