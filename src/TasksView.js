import React, { Component } from 'react'

  class TasksView extends Component {

  state = {
    taskName: 'zupa',
    taskDescription: 'foo'
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

  handleTaskDescriptionChange  = event => {
    this.setState ({
      taskDescription: event.target.value
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
                <input
                  value={this.state.taskDescription}
                  onChange={this.handleTaskDescriptionChange}
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