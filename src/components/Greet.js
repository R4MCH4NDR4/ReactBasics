
import React from "react";

// function Greet(){
//     return <h1>Hey , This is  Ram!</h1>
// }
const Greet = (props) => {
    const {first_name, last_name} = props
return (
    <div>
        <h1>
            Hey, This is {first_name} {last_name} 
        </h1>
    </div>
);
}

//Arow function with named export
// export const Greet = () => <h1>Hello Ram</h1>

export default Greet;