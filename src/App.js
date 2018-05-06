import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import CounterView from './CounterView';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" render={()=> <h1>Our awesome app</h1>}/>
      <NavBar/>


        <Route path="/counters" render={() => <CounterView initialMax={10}/>}/>
        <Route path="/about" render={()=> <p>Foo</p>}/>
      </div>
      </Router>
    )
  }
}
export default App