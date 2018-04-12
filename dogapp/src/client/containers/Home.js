import React, { Component } from 'react';
import '../css/Home.css';
import Nav from "./nav.js";
import DogImage from '../components/HomePage/DogImage'
import DogBreed from '../components/HomePage/DogBreed'
import {Dog} from '../../DummyData'
import DogLike from '../components/HomePage/DogLike'
import DogDisLike from '../components/HomePage/DogDislike'

class Home extends Component {

  render() {
    let url=Math.floor(Math.random() * Dog.length);
    let dogurl=Dog[url].image;
    let breed=Dog[url].breed;

    return(
      <div>
        <Nav />
        <br />
        <DogBreed dogbreed={breed} />
        <DogImage dogurl={dogurl} />
        <DogLike />
        <DogDisLike />

      </div>
    );
  }

}

export default Home;
