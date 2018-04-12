import React, { Component } from 'react';
import './client/css/App.css';
import Home from './client/containers/Home'
import Top3 from './client/containers/Top3'



class App extends Component {
  render() {
    return (
      <div className="App">

      <Top3 />
      </div>
    );
  }
}

export default App;
