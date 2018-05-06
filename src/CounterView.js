import React from 'react';
import './App.css';
import Counter from './Counter';

  class CounterView extends React.Component {

   state = {
          appMax: 14
   }

  decrementAppMax = howMuch => this.setState({
      appMax: this.state.appMax - howMuch
  })

    handleClick = () => this.setState({
      appMax: 14
  })

    componentDidMount() {
      this.start()
    }

    start = () => {
      this.intervalId = setInterval(() => this.setState({
          appMax: this.state.appMax + 1
      }), 1000)
    }

    stop = () => {
      clearInterval(this.intervalId)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      return {
          appMax: nextProps.initialMax
      }
    }

    render() {
      const { appMax } = this.state

      return (
          <div>
              <p>Current max is: {appMax}</p>
              <button onClick={this.handleClick}>
                reset max
              </button>
              <button onClick={this.stop}>
                stop
              </button>
              <button onClick={this.start}>
                start
              </button>
              <Counter
                parentDecrementer={this.decrementAppMax}
                initialValue={3}
                max={appMax}
                min={1}
                step={2}
              />
      </div>
      );
    }
}

  export default CounterView;