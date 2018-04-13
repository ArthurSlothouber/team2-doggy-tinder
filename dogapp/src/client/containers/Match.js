import React, { Component } from 'react';
import '../css/Home.css';
import {ImageDisplay} from '../components/MyMatch/ImageDisplay';
import {UserNameDisplay} from '../components/MyMatch/UserNameDisplay';
import {Dog, User} from '../../DummyData';

class Match extends Component {

  //const UserLikes = 5;
  //const UserBreed = "Poodle";

  //console.log(UserLikes)

//User[0].image


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
