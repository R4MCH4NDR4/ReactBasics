import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMessage:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
            console.log(response)
            this.setState({
                posts : response.data
            })
        })
        .catch( error => {
            this.setState({
                errorMessage:  error.message
            })
            console.log(error)
        })
    }
    
  render() {
    const {posts, errorMessage} = this.state
    return (
      <div>
        List of PostList
        {
            posts.length ?
            posts.map( post => <div className='card' key ={post.id}>
                <div className='card-body'>
                <h5 className='card-title'>{post.title}</h5>
                <p className='card-text'>{post.body}</p>
                </div>
                </div>) :
            null
        }
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    )
  }
}

export default PostList
