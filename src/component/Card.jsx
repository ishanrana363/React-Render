import "../css/style.css"
let  data = new Date();
let year = data.getFullYear()
let month = data.getMonth()
let day = data.getDay()
const Card = () => {
    return (
        <>
            <div className="card" >
                <h1 className="cardTitle" >Todo App</h1>
                <p
                 className="cardDes"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, porro?
                 </p>
                 <p className="cardFooter" >
                    {year + "/" + month + "/" + day}
                 </p>
            </div>
        </>
    );
};

export default Card;