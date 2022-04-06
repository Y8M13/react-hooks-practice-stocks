import React, { useState, useEffect } from "react";
import Stock from "./Stock";

const stock = [];
const url = 'http://localhost:3001/stocks';

const StockContainer = () => {
  const [stocks, setStocks] = useState([])
// const data = [ stocks]
// const stockList = stocks.map(stock => {
// console.log(data)
// // //   return <Stock
// // })

// const App = () => {
//   const groceries = [ {id: 1, grocery: "bananas", price: "$1.00"}, {id: 2, grocery: "avocado", price: "$3.00"}, {id: 3, grocery: "water", price: "$5.00"}, {id: 4, grocery: "toilet tissue", price: "$7.00"} ]    //changed from strings to objects with {}
//   const lis = groceries.map(grocery => {
//     console.log(grocery)
//     return <Example1 key = {grocery.id} grocery = {grocery} />  //Key value pairs that will be placed inside of the props object
//   })
//   return (
//     <div className="App">
//       <h1>My First React Example</h1>
//       {lis} 
//       <Example2 />
//     </div>
//   );
//}
  
  useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => console.log(data)
    //   // return <Stock key = {stocks.id} stocks = {stocks} />
    //setStocks(data)
    //}
    )
    
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {/* {stock.data}   */}
      <Stock />

                
    </div>
  );
}

export default StockContainer;
