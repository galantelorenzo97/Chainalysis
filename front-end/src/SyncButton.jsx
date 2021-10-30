function SyncButton(props) {
    return (
        <button onClick={props.syncFunction} type="button" className="btn btn-info">Sync</button>
    );
}

export default SyncButton;