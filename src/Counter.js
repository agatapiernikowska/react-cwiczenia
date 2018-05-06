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
    value: this.props.initialValue
  })

  static getDerivedStateFromProps (nextProps, prevState) {
    return {value:nextProps.initialValue}
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.value}</h1>
        <p>
          <button onClick={this.handleIncrementClick}>
            Increment
          </button>
          <button onClick={this.handleDecrementClick}>
            Decrement
          </button>
          <button onClick={this.handleResetClick}>
            Reset
          </button>
        </p>
      </Fragment>
    )
  }
}

window.Counter = Counter
export default Counter