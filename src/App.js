import React, { Component } from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import CounterView from './CounterView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <h1>Our awesome app</h1>

        <Route path="/counters" component={CounterView}/>
      </div>
      </BrowserRouter>
    )
  }
}
export default App