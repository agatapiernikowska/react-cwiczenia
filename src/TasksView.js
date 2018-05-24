import React, {Component} from 'react'

class TasksView extends Component {

  state = {
    taskName: 'zupa',
    taskDescription: 'foo',
    tasks: [
      {
        id: 1,
        name: 'Be awesome',
        description: 'Some words...'
      },
      {
        id: 2,
        name: 'Learn React',
        description: 'Fast!'
      }
    ]
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.taskName, this.state.taskDescription)


    this.setState({
      tasks: this.state.tasks.concat({
        id: Math.max.apply(null, this.state.tasks.map(task => task.id)) + 1,
        name: this.state.taskName,
        description: this.state.taskDescription
      })
    })

  }
  handleChange = event => {
    this.setState({
      //dynamic attribute name
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="taskName"
            value={this.state.taskName}
            onChange={this.handleChange}
          />
          <input
            name="taskDescription"
            value={this.state.taskDescription}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
        <ul>
          {
            this.state.tasks.map(
              task => (
                <li key={task.id}>
                  {task.name} : {task.description}
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default TasksView