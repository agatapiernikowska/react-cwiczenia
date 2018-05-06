import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import CounterView from './CounterView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" render={()=> <h1>Our awesome app</h1>}/>
        <nav>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/counters">Counters</Link></p>
          <p><Link to="/about">About</Link></p>
        </nav>

        <Route path="/counters" component={CounterView}/>
        <Route path="/about" render={()=> <p>Foo</p>}/>
      </div>
      </BrowserRouter>
    )
  }
}
export default App