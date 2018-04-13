import React, { Component } from 'react';
import '../css/Home.css';
import Nav from "./nav.js";
import {ImageDisplay} from '../components/MyMatch/ImageDisplay';
import {UserNameDisplay} from '../components/MyMatch/UserNameDisplay';


class Match extends Component {

  render(){


    return(
    <div>
      <UserNameDisplay />
      <ImageDisplay />
      <br />
      <Nav />

    </div>
)

  }
}
export default Match
