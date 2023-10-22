import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [isBought, setIsBought] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("All")

  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((data) => setStocks(data))
  }, [])



  const filteredStocks = stocks.filter((stock) => {
    if (filterBy === "All") {
      return stock
    } else {
      return stock.type === filterBy
    }
  })

  const sortedStocks = filteredStocks.sort((a, b) => {
    if (sortBy === "Alphabetically") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    } else {
     return a.price - b.price
    }
  })

  return (
    <div>
      <SearchBar
      setSortBy={setSortBy}
      sortBy={sortBy}
      setFilterBy={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
          stocks={sortedStocks}
          isBought={isBought}
          setIsBought={setIsBought}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
          isBought={isBought}
          setIsBought={setIsBought}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
