import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Card from "react-bootstrap/Card";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  console.log(total);

  return (
    <div className="balancecomponent">
      <Card border="success" style={{ width: "18rem", borderWidth: "4px" }}>
        <Card.Body>
          <Card.Title>
            <h2>Current Balance</h2>
          </Card.Title>
          <Card.Text>
            <h3>
              <b>${total}</b>
            </h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Balance;
