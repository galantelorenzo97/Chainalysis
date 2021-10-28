//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="py-3 mb-4 border-bottom">
        <h1 className="display-1 text-center">
          I am looking to&nbsp;
          <div className="btn-group mh-100 mw-100" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-danger active buy-btn">
              <h1 className="display-3">Buy</h1>
            </button>
            <button type="button" className="btn btn-outline-success">
              <h1 className="display-3 active">Sell</h1>
            </button>
          </div>
          &nbsp;
          <div className="btn-group mh-100 mw-100" role="group" aria-label="Crypto-currency selector">
            <button type="button" className="btn btn-outline-secondary">
              <h1 className="display-3">BTC</h1>
            </button>
            <button type="button" className="btn btn-primary active">
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
