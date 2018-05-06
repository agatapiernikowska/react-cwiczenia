import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";

class App extends Component {
  state = {
    appMax: 14
  }

  handleClick = () => this.setState ({
    appMax: 14
  })
  componentDidMount () {
    setInterval(() => this.setState ({
      appMax: this.state.appMax + 1
    }),1000)
  }
  render() {
    const appMax = this.state.appMax
    return (
      <div>
        <p>Current max is: {appMax}</p>
        <button onClick={this.handleClick}>
          reset max
        </button>
        <Counter
          initialValue={3}
          max={14}
          min={1}
          step={2}
        />

      </div>
    );
  }
}

export default App;
