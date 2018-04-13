import React, { Component } from 'react';
import '../css/Top3.css';
import {TopThreeDisplay} from '../components/TopThree/TopThreeDisplay'
import TitleHeader from '../components/TitleHeader'

class Top3 extends Component {

  render() {
    return(
      <div>
      <TitleHeader title ="Your top dogs" />
      <TopThreeDisplay />
      </div>
  )
  }

}

export default Top3;
