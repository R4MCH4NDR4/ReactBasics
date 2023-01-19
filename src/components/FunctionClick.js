import React from "react";

function FunctionClick () {
 function clickhandler(){
    console.log('Button Clicked')
 }
    return(
        <div>
            <button onClick={clickhandler}>Click me</button>
        </div>
    )
}

export default FunctionClick;