import React, {Component, Fragment} from 'react'
class Counter extends Component {
  state= {
    value:0
}

handleIncrementClick = () => this.setState({
  value: Math.min(this.state.value + 1,10)
})

  handleDecrementClick = () => this.setState({
    value: Math.max(this.state.value - 1,0)
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