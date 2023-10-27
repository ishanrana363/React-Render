import React from "react";


const Render1 = () => {
    // return (
    //     // <div>
    //     //     <h1>Hello ishan rana</h1>
    //     // </div>
        
    // );
    return React.createElement(
        "div",
        {
            id : "Hello",
            className : "dummyClass"
        },
        React.createElement("h1",null,"Hello ishan")
    )
};

export default Render1;