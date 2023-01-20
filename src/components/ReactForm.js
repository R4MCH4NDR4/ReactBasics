import React, { Component } from 'react'

class ReactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      comments: '',
      topic: 'React'
    }
  }
  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }
  hadnleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }
  handleTopicChange = event => {
    console.log(event.target.value)
    this.setState({
      topic: event.target.value
    })

  }
  handleSubmit = event => {
    console.log("event in formsubmit", event)
    alert(`${this.state.userName} , ${this.state.comments} ${this.state.topic}`)
    event.preventDefault();
  }

  render() {
    const {userName, comments, topic} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName</label>
            <input type="text" value={userName} onChange={this.handleUserNameChange}></input>
          </div>
          <br />
          <div>
            <label>Comments</label>
            <textarea type="textarea" value={comments} onChange={this.hadnleCommentsChange} />
          </div>
          <div>
            <label>Select Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ReactForm
