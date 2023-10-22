import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ isBought, setIsBought }) {

  function handleSellStock(stock) {
    const updatedIsBought = isBought.filter((obj) => {
      return obj !== stock
    })
    setIsBought(updatedIsBought)
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {isBought.map((stock) => (
        <div
        onClick={() => handleSellStock(stock)}
        key={stock.id}>
          <Stock
            stock={stock}
            key={stock.id}
            isBought={isBought}
            setIsBought={setIsBought}
          />
        </div>
      ))}
    </div>
  );
}

export default PortfolioContainer;
