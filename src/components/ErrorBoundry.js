import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        return {hasError: true}
        console.log(error, errorInfo)
    }
  render() {
    if(this.hasError){
        return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry
