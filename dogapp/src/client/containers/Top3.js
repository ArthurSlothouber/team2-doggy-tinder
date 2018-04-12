import React, { Component } from 'react';
import '../css/Home.css';
import Nav from "./nav.js";
import {TopThreeDisplay} from '../components/TopThree/TopThreeDisplay'

class Top3 extends Component {

  render() {
    return(
      <div>
      <TopThreeDisplay />
      <Nav />
      </div>
  )
  }

}

export default Top3;
