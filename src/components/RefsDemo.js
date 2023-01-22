import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef(); //step 1, step 2 attach ref to input
    }
    componentDidMount(){
        this.inputRef.current.focus(); //on loading input box is made to focus.
        console.log(this.inputRef);

    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default RefsDemo
