import React, { Component } from 'react';
import AppIntro from "./AppIntro";
import './App.css';
import Header from "./Header";


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <AppIntro message = "Hello All!"/>
        <AppIntro message = "Hello FFFFFF!"/>
        <AppIntro message = {'Hello' + 'XXX!'}/>
        <AppIntro message = 'Hello ZZZZL!'/>
        <AppIntro message = {'Hello ZZZZL!'}/>

      </div>
    );
  }
}

export default App;
