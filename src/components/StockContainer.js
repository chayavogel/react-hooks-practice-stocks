import React from "react";
import Stock from "./Stock";

function StockContainer( {stocks, isBought, setIsBought} ) {

  function handleBuyStock(stock) {
    if (isBought.includes(stock) === false) {
      setIsBought([...isBought, stock])
    }
  }

  return (
    <div >
      <h2>Stocks</h2>
      {stocks.map((stock) => {
        return (
          <div
          onClick={() => handleBuyStock(stock)}
          key={stock.id}>
        <Stock
          stock={stock}
          key={stock.id}
          isBought={isBought}
          setIsBought={setIsBought}
          />
          </div>
        )
      })}
    </div>
  );
}

export default StockContainer;
