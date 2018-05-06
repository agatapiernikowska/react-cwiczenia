import React, {Component, Fragment} from 'react'
class Counter extends Component {
  state= {
    value:0
}

handleClick = () => this.setState({
  value: this.state.value + 1
})

  render() {
    return (
      <Fragment>
        <h1>{this.state.value}</h1>
        <p>
          <button onClick={this.handleClick}>
            Increment
          </button>
        </p>
      </Fragment>
    )
  }
}


export default Counter