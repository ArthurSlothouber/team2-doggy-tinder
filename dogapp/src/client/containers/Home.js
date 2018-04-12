import React, { Component } from 'react';
import '../css/Home.css';
import Nav from "./nav.js";
import DogImage from '../components/HomePage/DogImage'
import DogBreed from '../components/HomePage/DogBreed'
import {Dog} from '../../DummyData'
import DogLike from '../components/HomePage/DogLike'

class Home extends Component {






  render() {


    return(
      <div>

        <br />
        <DogLike />
        <Nav />
      </div>
    );
  }

}

export default Home;
