import React, { PureComponent } from 'react'
import {Dog} from '../../../DummyData'
import DogImage from './DogImage'
import DogBreed from './DogBreed'



class DogLike extends PureComponent {

 constructor(){
   super();
  let DogDetails = this.state = {
     url: " ",
     dogurl: "http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23012_beagle-460x290.jpg",
     breed: "Beagle",

   }
    this.handleClick = this.handleClick.bind(this);
 }



  dogClick(){
    let url=Math.floor(Math.random() * Dog.length);
    this.setState({
    dogurl:Dog[url].image,
    breed:Dog[url].breed},
    )

  }

  handleClick(){
    console.log("clicked")
    this.dogClick();
  }
  render() {

    return(
<<<<<<< HEAD
      <button className="homepagelikebutton">
        Like
      </button>
=======
      <div>
     <DogBreed dogbreed={this.state.breed} />
     <DogImage dogurl={this.state.dogurl} />
     <button className="homepagelikebutton" onClick={this.handleClick}>
        Like</button>
      <button className="homepagedislikebutton" onClick={this.handleClick}>
      Dislike</button>
      </div>
>>>>>>> 28664a77b2ec4a43d50d1e7e5e1d00abf365b653
    )
  }
}


export default DogLike
