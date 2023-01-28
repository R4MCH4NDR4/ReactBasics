import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userId: '',
         title: '',
         body:''
      }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    submitHandler = (e) => {
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
        console.log(this.state)
        e.preventDefault()
    }

    
  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>UserId</label>
                <input type="text" name="userId" value={userId} onChange={this.onChangeHandler}/>
            </div>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={title} onChange={this.onChangeHandler}/>
            </div>
            <div>
                <label>Body</label>
                <input type="text" name="body" value={body} onChange={this.onChangeHandler}/>
            </div>
            <button>Submitt</button>
        </form>
      </div>
    )
  }
}

export default PostForm
