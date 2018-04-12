import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogLike from './client/components/HomePage/DogLike'
import BackButtonMatch from './client/components/MyMatch/BackButtonMatch'
import BackButtonTopThree from './client/components/TopThree/BackButtonTopThree'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DogTinder</h1>
        </header>
      <DogLike />
      <BackButtonMatch />
      <BackButtonTopThree />
      </div>
    );
  }
}

export default App;
