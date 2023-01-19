import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    Increment(){
        //for single time update
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> {
        //     console.log("CallBack value", this.state.count)
        // })

       this.setState((prevState) => ({
        count : prevState.count + 1
       }), () => {
        console.log("callBack value", this.state.count);
       })
        console.log(this.state.count)
    }

    IncrementFiveTimes()
    {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={() => this.IncrementFiveTimes()}>Increment</button>
            </div>
        )
    }
    
}
export default Counter;