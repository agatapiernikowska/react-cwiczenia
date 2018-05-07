import React, {Component, Fragment} from 'react'
class Counter extends Component {
  state= {
    value:undefined,
    title: 'Super Counter'
}

static defaultProps = {
    max:10,
  min:0
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

    // DEAD
    getInitialState() {
    console.log('Get Initial State');
  }

    // DEPRECATED (ALMOST DEAD)
      componentWillMount() {
      console.log('Component Will Mount')
    }

    // DEPRECATED
      getDefaultProps() {
      console.log('Get Default Props')
    }

    componentDidMount() {
      console.log('Component Did Mount')
    }

    componentWillReceiveProps() {
      console.log('Component Will Receive Props')
   }

    shouldComponentUpdate() {
      console.log('Should Component Update')
      return true
    }

    componentWillUpdate() {
      console.log('Component Will Update')
   }

    componentDidUpdate() {
      console.log('Component Did Update')
    }

    componentWillUnmount() {
      console.log('Component Will Unmount')
    }


  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('Get Derived State From Props')
    return {
      value: prevState.value === undefined
      ? nextProps.initialValue
        : prevState.value
    }
  }

  render() {
    console.log('Render')
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

          <button onClick={()=> this.props.parentDecrementer(this.state.value)}>
            Decrement parent
          </button>
        </p>
      </Fragment>
    )
  }
}

export default Counter