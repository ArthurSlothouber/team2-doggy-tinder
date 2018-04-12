import React, { Component } from 'react';
import './client/css/App.css';
// import Home from './client/containers/Home'
import Match from './client/containers/Match';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Match />
      </div>
    );
  }
}

export default App;
