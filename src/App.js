import React, { Component } from 'react';
import AppIntro from "./AppIntro";
import './App.css';
import Header from "./Header";


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <AppIntro/>

      </div>
    );
  }
}

export default App;
