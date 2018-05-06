import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";

class App extends Component {
  state = {
    appMax: 14
  }

  componentDidMount () {
    setInterval(() => this.setState ({
      appMax: this.state.appMax + 1
    }),1000)
  }
  render() {
    return (
      <div>
        <p>Current max is: {this.state.appMax}</p>
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
