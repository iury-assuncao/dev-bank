import "./cardLanding.css";

const CardLanding = (props) => {
    return(
        <div className="card">
            <h3>{props.title}</h3>

            <p>{props.text}</p>
        </div>
    )
}

export default CardLanding