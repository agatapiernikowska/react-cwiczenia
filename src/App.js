import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter";


class App extends Component {
  render() {
    console.log ('malujemy App')
    return (
      <div>

        <Counter/>


      </div>
    );
  }
}

export default App;
