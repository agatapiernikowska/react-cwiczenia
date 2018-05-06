import React, {Component, Fragment} from 'react'
class Counter extends Component {
  state= {
    value:0
}

handleClick = delta => this.setState ({
  value: delta === undefined
  ?this.props.initialValue
    :Math.max(Math.min(this.state.value + delta, 10), 0)
})

  static getDerivedStateFromProps (nextProps, prevState) {
    return {value:nextProps.initialValue}
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.value}</h1>
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

window.Counter = Counter
export default Counter