import React from "react";

class Message extends React.Component {

    constructor(props) {
        //Need to call super as to intiate base constructor of Component class 
        super(props)
        this.state = {
            message: 'Welcome Vistor, Please click subscribe'
        }
    }
    ChangeMessage() {
        this.setState({
            message: 'Thank you subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <label>subscribe to news letter</label>
                <br />
                <input type="email" placeholder="email"></input>
                <br />
                <button onClick={() => this.ChangeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message