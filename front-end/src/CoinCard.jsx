function CoinCard(props) {
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">{props.exchange}</div>
            <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <h6 className="card-subtitle mb-2 text-danger">BUY Price: ${props.buy}</h6>
                <h6 className="card-subtitle mb-2 text-success">SELL Price: ${props.sell}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default CoinCard;