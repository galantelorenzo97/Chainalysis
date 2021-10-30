function CoinCard(props) {
    return (
        <div className="card text-white bg-dark mb-3">
            {props.logo &&
                <img src={props.logo} class="card-img-top" alt={props.exchange + " logo"} />}
            <div className="card-header">{props.exchange}</div>
            <div className="card-body">
                <h5 className="card-title">Light card title</h5>
                <h6 className="card-subtitle mb-2 text-danger">BUY Price: ${props.buy}</h6>
                <h6 className="card-subtitle mb-2 text-success">SELL Price: ${props.sell}</h6>
                {props.warn &&
                    <p className="card-text bg-warning">{props.warn}</p>
                }
                {props.info &&
                    <p className="card-text bg-info">{props.info}</p>
                }
            </div>
        </div>
    );
}

export default CoinCard;