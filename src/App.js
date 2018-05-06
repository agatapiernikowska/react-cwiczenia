import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import CounterView from './CounterView';

import NavBar from './NavBar'
import MagicNumber from "./MagicNumber";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" render={()=> <h1>Our awesome app</h1>}/>
      <NavBar/>


        <Route path="/counters" render={() => <CounterView initialMax={10}/>}/>
        <Route path="/about" render={()=> <p>Foo</p>}/>
        <Route path="/magic-number" component={MagicNumber}/>
      </div>

      </Router>
    )
  }
}
export default App