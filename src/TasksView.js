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
      //dynamic attribute name
      [event.target.name]: event.target.value
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
                  name="taskName"
                  onChange={this.handleChange}
                />
                <input
                  name="taskDescription"
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