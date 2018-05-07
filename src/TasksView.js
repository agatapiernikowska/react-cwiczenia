import React, { Component } from 'react'

  class TasksView extends Component {
    render() {
          return (
            <div>
              <h1>Tasks</h1>
              <form>
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