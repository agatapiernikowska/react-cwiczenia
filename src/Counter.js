import React, {Component, Fragment} from 'react'
class Counter extends Component {
  state= {
    value:0
}

componentDidMount () {
setTimeout(() => this.setState({
    value: 1
  }), 1000)
}

  render() {
    console.log('malujemy Counter!')
    return (
      <Fragment>
        <h1>{this.state.value}</h1>
        <p>
          <button>Increment</button>
        </p>
      </Fragment>
    )
  }
}


export default Counter