import React, { Component } from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import CounterView from './CounterView';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" render={()=> <h1>Our awesome app</h1>}/>
      <NavBar/>


        <Route path="/counters" render={() => <CounterView initialMax={10}/>}/>
        <Route path="/about" render={()=> <p>Foo</p>}/>
      </div>
      </BrowserRouter>
    )
  }
}
export default App