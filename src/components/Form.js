import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topics: 'react'
      }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topics: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Thank you ${this.state.username} ${this.state.comments} ${this.state.topics} for submission`)
        //page doesn't refresh
        // event.preventDefault() 
    }

  render() {
    const {username, comments, topics} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' 
                value={username} 
                onChange={this.handleUsernameChange} 
            />
        </div>
        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleCommentChange} ></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={topics} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form