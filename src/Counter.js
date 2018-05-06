import React, {Component, Fragment} from 'react'
class Counter extends Component {
  state= {
    value:0
}

handleIncrementClick = () => this.setState({
  value: this.state.value + 1
})

  handleDecrementClick = () => this.setState({
    value: this.state.value - 1
  })

  handleResetClick = () => this.setState({
    value: 0
  })

  render() {
    return (
      <Fragment>
        <h1>{this.state.value}</h1>
        <p>
          <button onClick={this.handleIncrementClick}>
            Increment
          </button>
          <button onClick={this.handleDecrementClick}>
            Increment
          </button>
          <button onClick={this.handleResetClick}>
            Increment
          </button>
        </p>
      </Fragment>
    )
  }
}


export default Counter