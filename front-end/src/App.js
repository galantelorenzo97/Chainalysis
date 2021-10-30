//import logo from './logo.svg';
/* eslint-disable */
import './App.css';
import React from 'react';
import Pill from './Pill.jsx'
import CoinCard from './CoinCard.jsx';
import SyncButton from './SyncButton.jsx';

function App() {
  const [buy, setBuy] = React.useState(true);
  const [btc, setBtc] = React.useState(true);
  const [exchangeDataList, setExchangeDataList] = React.useState([]);
  const [currentlySelectedIndex, setCurrentlySelectedIndex] = React.useState(0);
  const [lastUpdated, setLastUpdated] = React.useState(new Date().toLocaleString());

  const updateExchangeData = React.useCallback((buy, btc) => {
    fetch(`http://localhost:8080/getAllPrices/${btc ? "BTC" : "ETH"}`)
      .then(res => res.json())
      .then((result) => {
        let sortedExchangeList = [...result];
        let sortBuy = (a, b) => { return a.buy - b.buy };
        let sortSell = (a, b) => { return b.sell - a.sell };
        sortedExchangeList.sort(buy ? sortBuy : sortSell);
        setExchangeDataList(sortedExchangeList);
        setBuy(buy);
        setBtc(btc);
        setLastUpdated(new Date().toLocaleString());
      }), [buy, btc]
  });

  const updateExchangeDataBuy = React.useCallback((buy) => updateExchangeData(buy, btc));
  const updateExchangeDataBTC = React.useCallback((btc) => updateExchangeData(buy, btc));

  const syncFunction = React.useCallback(() => {
    updateExchangeData(buy, btc);
    setLastUpdated(new Date().toLocaleString())
  })

  React.useEffect(() => {
    syncFunction();
    console.log('useEffect call');
  }, []);

  return (
    <div className="App">
      <header className="py-3 mb-2">
        <h1 className="display-1 text-center">
          I am looking to&nbsp;
          <Pill
            controlFunction={updateExchangeDataBuy}
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
            controlFunction={updateExchangeDataBTC}
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
          <div className="col">
            <h1 className="display-3 text-center mb-4">
              Last Updated: {lastUpdated}&nbsp;
              <SyncButton syncFunction={syncFunction} />
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <ul className="list-group">
              {exchangeDataList.map((data, index) => (
                <li onClick={() => { setCurrentlySelectedIndex(index); syncFunction();}} key={index} className={`list-group-item list-group-item-action ${index === 0 ? "list-group-item-success" : "list-group-item-dark"} ${index === currentlySelectedIndex ? "active" : ""}`}>{data.exchange}{index === 0 ? " (Best Bet)" : ""}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            {
              exchangeDataList.length > 0
              &&
              <CoinCard
                exchange={exchangeDataList[currentlySelectedIndex].exchange}
                buy={exchangeDataList[currentlySelectedIndex].buy}
                sell={exchangeDataList[currentlySelectedIndex].sell}
                warn={exchangeDataList[currentlySelectedIndex].warn}
                info={exchangeDataList[currentlySelectedIndex].info}
                logo={exchangeDataList[currentlySelectedIndex].logo}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
