import "../css/style.css"

const Card = (props) => {
    const data = new Date();
    const day = data.getDay();
    const month = data.getMonth();
    const year = data.getFullYear()
    // eslint-disable-next-line react/prop-types
    const {cardTitle,cardDesc} = props
    return (
        <>
            <div className="card" >
                <h1 className="cardTitle"> {cardTitle} </h1>
                <h4 className="cardDesc" >
                   {cardDesc}
                </h4>
                <p className="cardFooter" >
                    {
                        day + "/" + month + "/" + year
                    }
                </p>
            </div>
        </>
    );
};

export default Card;