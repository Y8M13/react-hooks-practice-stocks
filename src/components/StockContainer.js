// import React, { useState, useEffect } from "react";
import Stock from "./Stock.js";

// const url = 'http://localhost:3001/stocks';
let stocks = [];

const StockContainer = () => {
  // const [stocks, setStocks] = useState([]);
  // const data = [ stocks]
  // const stockList = stocks.map(stock => {
    // console.log(data)
    // // //   return <Stock
    // // })

  
  // useEffect(() => {
  //   fetch(url)
  //   .then(resp => resp.json())
  //   .then(data => 
  //     {
  //       setStocks(data)
  //       console.log(data)
    //   // return <Stock key = {stocks.id} stocks = {stocks} />
  //   })
  // }, []);

  
  return (
    <div>
      <div>
        <h2>Stock</h2>
      </div>
      <div>
        {stocks}
      </div>
      <div>
        <Stock  />

      </div>
    </div>
  )
}
  
export default StockContainer;
