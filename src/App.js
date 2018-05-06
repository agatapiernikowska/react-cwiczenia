import React, { Component } from 'react';
import AppIntro from "./AppIntro";
import './App.css';
import Header from "./Header";

const bolden = bgColor => text =>  (
  <strong
    style={{
      backgroundColor:bgColor
    }}>
    {text}
  </strong>
)


const italify = () => text =>
  <em>Pepperoni {text} </em>

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <AppIntro message = "Hello All!"/>
        <AppIntro message = "Hello FFFFFF!"/>
        <AppIntro message = {'Hello' + 'XXX!'}/>
        <AppIntro
          message = 'Hello ZZZZL!'
          beautify={italify()}
        />
        <AppIntro
          message = {'Hello ZZZZL!'}
          beautify = {bolden('red')}
            />

      </div>
    );
  }
}

export default App;
