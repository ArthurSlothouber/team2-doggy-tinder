import React, { Component } from 'react';
import './client/css/App.css';
import Home from './client/containers/Home'
import Top3 from './client/containers/Top3'
import Match from './client/containers/Match';



class App extends Component {
  render() {
    return (
      <div className="App">


      <Home />
      <Match />
      <Top3 />


      </div>
    );
  }
}

export default App;
