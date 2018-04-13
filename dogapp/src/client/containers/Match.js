import React, { Component } from 'react';
import '../css/Home.css';
import {ImageDisplay} from '../components/MyMatch/ImageDisplay';
import {UserNameDisplay} from '../components/MyMatch/UserNameDisplay';


class Match extends Component {

  render(){

    return(
    <div>
      <UserNameDisplay />
      <br />
      <ImageDisplay />
      <br />
    </div>
)

  }
}
export default Match
