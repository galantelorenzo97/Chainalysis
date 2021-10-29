function CoinCard(props) {
    return (
        <div className="card text-white bg-dark mb-3">
            <div class="card-header">{props.exchange}</div>
            <div class="card-body">
                <h5 class="card-title">Light card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default CoinCard;