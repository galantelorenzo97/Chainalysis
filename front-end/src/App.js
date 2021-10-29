//import logo from './logo.svg';
/* eslint-disable */
import './App.css';
import React from 'react';
import Pill from './Pill.jsx'
import CoinCard from './CoinCard.jsx';

function App() {
  const [buy, setBuy] = React.useState(true);
  const [btc, setBtc] = React.useState(true);
  const [exchangeLoaded, setExchangeLoaded] = React.useState(false);
  const [exchangeDataList, setExchangeDataList] = React.useState([]);
  const [currentlySelectedIndex, setCurrentlySelectedIndex] = React.useState(0);
  const [currentlySelectedData, setCurrentlySelectedData] = React.useState({});

  React.useEffect(() => {
    fetch(`http://localhost:8080/getAllPrices/${btc ? "BTC" : "ETH"}`)
    .then(res => res.json())
    .then((result) => {
      setExchangeLoaded(true);
      let sortedExchangeList = [...result];
      let sortBuy = (a, b) => {return a.buy-b.buy};
      let sortSell = (a, b) => {return b.sell-a.sell};
      sortedExchangeList.sort(buy ? sortBuy : sortSell);
      setExchangeDataList(sortedExchangeList);
      console.log(sortedExchangeList);
    })
  }, [buy, btc]);

  return (
    <div className="App">
      <header className="py-3 mb-4">
        <h1 className="display-1 text-center">
          I am looking to&nbsp;
          <Pill
            controlFunction={setBuy}
            leftPillActive={buy}
            leftText="Buy"
            rightText="Sell"
            activeLeftStyle="btn-danger active"
            inactiveLeftStyle="btn-outline-danger"
            activeRightStyle="btn-success active"
            inactiveRightStyle="btn-outline-success"
          />
          &nbsp;
          <Pill
            controlFunction={setBtc}
            leftPillActive={btc}
            leftText="BTC"
            rightText="ETH"
            activeLeftStyle="btn-primary active"
            inactiveLeftStyle="btn-outline-primary"
            activeRightStyle="btn-secondary active"
            inactiveRightStyle="btn-outline-secondary"
          />
        </h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ul className="list-group">
              {exchangeDataList.map((data, index) => (
                <li onClick={(data, index) => {setCurrentlySelectedIndex(index); setCurrentlySelectedData(data);}} key={index} className={`list-group-item list-group-item-action ${index===0 ? "list-group-item-success" : "list-group-item-dark"} ${index===currentlySelectedIndex ? "active" : ""}`}>{data.exchange}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            {console.log(exchangeDataList)}
            <CoinCard exchange={exchangeDataList[currentlySelectedIndex].exchange} buy={1000} sell={2000} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
