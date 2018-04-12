import React, { Component } from 'react';
import './client/css/App.css';
import Home from './client/containers/Home'
import Top3 from './client/containers/Top3'
import Match from './client/containers/Match';



class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="logoHeader">Doggy Lover Dating</div>
      <br/>
      <Home />
      </div>
    );
  }
}

export default App;
