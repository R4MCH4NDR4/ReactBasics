import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ram'
      }
      console.log('Life Cycle A Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
    
    changeState = () =>{
        this.setState({
            name:'CodeEvalution'
        })
    }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>Life Cycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleA
