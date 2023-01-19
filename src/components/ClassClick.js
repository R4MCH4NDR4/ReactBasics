import React from "react";

class ClassClick extends React.Component{

    clickhandler() {
        console.log('class button clicked')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickhandler}>Click from Class</button>
            </div>
        )
    }
}

export default ClassClick