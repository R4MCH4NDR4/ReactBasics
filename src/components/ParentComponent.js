import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Ram'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name :'Ram'
            })
        }, 2000)
    }
    
  render() {
    console.log('Parent componnent')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name = {this.name}></RegComp>
        <PureComp name = {this.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComponent
