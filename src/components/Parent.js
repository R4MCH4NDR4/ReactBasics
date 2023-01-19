import React from "react";
import ChildComponent from "./ChildComponent";

class Parent extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            parent: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent (childName){
        alert(`Hello ${this.state.parent} from ${childName}`)
    }

    render(){
        return(
            <div>
                <ChildComponent greetHandler = {this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default Parent