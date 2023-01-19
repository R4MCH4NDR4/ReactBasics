import React from "react";

class Welcome extends React.Component {

    render() {
        const {name, heroname} = this.props
        return (
            <div>
                <h1>Welcome to {name} tutorials {heroname}</h1>
            </div>
        )
    }
}
export default Welcome;