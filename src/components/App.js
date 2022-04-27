import React, {useState, useEffect} from "react";
// import { useEffect } from "react/cjs/react.production.min";
import Header from "./Header";
import MainContainer from "./MainContainer";


const url = 'http://localhost:3001/stocks';
let stocks = [];

const App = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => 
      {
        setStocks(data)
        console.log(data)
      // return <stocks key = {stocks.id} stocks = {stocks} />
      

    })
  }, []);

  //})
//}
  
  return (
    <div>
      <Header />
      <MainContainer />
      {setStocks}
      
    
    </div>
  );
}

export default App;
