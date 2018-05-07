import React, { Component } from 'react'

  class TasksView extends Component {

  state = {
    taskName: 'zupa'
  }

  handleSubmit  = event => {
    event.preventDefault()
    console.log('submit')
  }

  handleChange = event => {
    this.setState({
      taskName: event.target.value
    })
  }
    render() {
          return (
            <div>
              <h1>Tasks</h1>
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.taskName}
                  onChange={this.handleChange}
                />
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