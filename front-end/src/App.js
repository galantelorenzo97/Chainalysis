//import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const[buy, setBuy] = React.useState(true);
  // eslint-disable-next-line
  const[btc, setBtc] = React.useState(true);
  return (
    <div className="App">
      <header className="py-3 mb-4 border-bottom">
        <h1 className="display-1 text-center">
          I am looking to&nbsp;
          <div className="btn-group mh-100 mw-100" role="group" aria-label="Basic outlined example">
            <button onClick={()=>setBuy(true)} type="button" className={`btn ${buy ? "btn-danger active" : "btn-outline-danger"}`}>
              <h1 className="display-3">Buy</h1>
            </button>
            <button onClick={()=>setBuy(false)} type="button" className={`btn text-white ${!buy ? "btn-success active" : "btn-outline-success"}`}>
              <h1 className="display-3 active">Sell</h1>
            </button>
          </div>
          &nbsp;
          <div className="btn-group mh-100 mw-100" role="group" aria-label="Crypto-currency selector">
            <button onClick={()=>setBtc(true)} type="button" className={`btn ${btc ? "btn-primary active" : "btn-outline-primary"}`}>
              <h1 className="display-3">BTC</h1>
            </button>
            <button onClick={()=>setBtc(false)} type="button" className={`btn ${!btc ? "btn-secondary active" : "btn-outline-secondary"}`}>
              <h1 className="display-3">ETH</h1>
            </button>
          </div>
        </h1>
      </header>
      <div className="container-fluid">

      </div>
    </div>
  );
}

export default App;
