import React, { Component } from 'react';
import '../css/Home.css';
import DogLike from '../components/HomePage/DogLike'

class Home extends Component {


  render() {

    return(
      <div className="Home">
        <DogLike />
      </div>
    );
  }

}

export default Home;
