import React, { Component } from 'react';
import '../css/Home.css';
import DogImage from '../components/HomePage/DogImage'
import DogBreed from '../components/HomePage/DogBreed'
import {Dog} from '../../DummyData'
import DogLike from '../components/HomePage/DogLike'
//import DogDisLike from '../components/HomePage/DogDislike'

class Home extends Component {


  render() {

    return(
      <div>
        <DogLike />
      </div>
    );
  }

}

export default Home;
