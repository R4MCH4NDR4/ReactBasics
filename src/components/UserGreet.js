import React from "react";  

class UserGreet extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn : true
        }
    }
    render(){
        //Type-1 conditional(if and else)
        //  if(this.state.isLoggedIn){
        //     return (<div>Welcome Ram!</div>)
        //  }
        //  else{
        //     return (<div>Welcome guest, please login</div>)
        //  }

        //Type-2 conditinal(if amd else)
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Hello Ram</div>
        // }
        // else {
        //     message = <div>Hello guest, please login!</div>
        // }
        //return (<div>{message}</div>)

        //Circuit operator, return if ot evaluates to true
        //return this.state.isLoggedIn && <div>Welcome Ram</div> 


        //type-3 ternary operator
        return(
            this.state.isLoggedIn ? (<div>Welcome Ram</div>) : (<div>Welcome guest, please login</div>)
        )
        
    }
}
export default UserGreet;