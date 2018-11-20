import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'; 
import Score from "./Header/Score.js";
import Time from "./Header/Time.js";
import PlayingArea from "./PlayArea/PlayingArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Card Game</h1>
          <Score text="0"></Score>
          <Time text="0"></Time>
        </header>
        <main className="App-main"> 
        <PlayingArea></PlayingArea>
        
        </main>

      </div>
    );
  }
}

export default App;
