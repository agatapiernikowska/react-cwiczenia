import React, {Component, Fragment} from 'react'
class Counter extends Component {
  state= {
    value:undefined,
    title: 'Super Counter'
}

handleClick = delta => this.setState ({
  value: delta === undefined
    ? this.props.initialValue
    : Math.max(
      Math.min(
        this.state.value + delta * this.props.step,
        this.props.max
      ),
      this.props.min
    )
})

  static getDerivedStateFromProps (nextProps, prevState) {
    return {
      value: prevState.value === undefined
      ? nextProps.initialValue
        : prevState.value
    }
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.value}</h1>
        <h2>{this.state.title}</h2>
        <p>
          <button onClick={() => this.handleClick(1)}>
            Increment
          </button>
          <button onClick={() => this.handleClick(-1)}>
            Decrement
          </button>
          <button onClick={() => this.handleClick()}>
            Reset
          </button>
        </p>
      </Fragment>
    )
  }
}

export default Counter