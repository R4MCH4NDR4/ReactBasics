import React from "react";

class EventBind extends React.Component {
    constructor()
    {
        super()
        this.state = {
            message: 'Hello'
        }
        // this.clickhandler = this.clickhandler.bind(this)
    }
    // clickhandler() {
    //     console.log(this)
    //     this.setState({
    //         message : 'Good Bye'
    //     })   
    // }

    clickhandler = () => {
        this.setState({
            message : 'Good Bye'
        }) 
    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickhandler.bind(this)}>Click me</button> */}
                {/* <button onClick={() => this.clickhandler()}>Click me</button> */}
                <button onClick={this.clickhandler}>Click me</button>
            </div>
        )
    }
}
export default EventBind;