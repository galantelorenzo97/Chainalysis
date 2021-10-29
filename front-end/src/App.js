//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Pill from './Pill.jsx'

function App() {
  const [buy, setBuy] = React.useState(true);
  const [btc, setBtc] = React.useState(true);
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
    </div>
  );
}

export default App;
