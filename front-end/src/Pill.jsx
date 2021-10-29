function Pill(props) {
    return (
        <div className="btn-group mh-100 mw-100" role="group" aria-label="Basic Pill">
            <button onClick={() => {props.controlFunction(true)}} type="button" className={`btn ${props.leftPillActive ? props.activeLeftStyle : props.inactiveLeftStyle}`}>
                <h1 className="display-3">{props.leftText}</h1>
            </button>
            <button onClick={() => {props.controlFunction(false)}} type="button" className={`btn ${!props.leftPillActive ? props.activeRightStyle : props.inactiveRightStyle}`}>
                <h1 className="display-3 active">{props.rightText}</h1>
            </button>
        </div>
    );
}

export default Pill;