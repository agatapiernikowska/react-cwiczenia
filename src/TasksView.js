import React, { Component } from 'react'

  class TasksView extends Component {

  handleSubmit  = event => {
    event.preventDefault()
    console.log('submit')
  }
    render() {
          return (
            <div>
              <h1>Tasks</h1>
              <form onSubmit={this.handleSubmit}>
                <input/>
                <button>Add</button>
              </form>
              <ul>
                <li>First task</li>
                <li>Second task</li>
              </ul>
            </div>
            )
          }
  }

export default TasksView