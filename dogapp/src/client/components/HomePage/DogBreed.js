import React, { PureComponent } from 'react'
import {Dog} from '../../../DummyData'
import '../../css/titleHeader.css'


class DogBreed extends PureComponent {
   render(){

      //let url=Math.floor(Math.random() * Dog.length);
      //let breed=Dog[url].breed;

      return (
        <div className="titleHeader">
          {this.props.dogbreed}
        </div>
      )

  }
}

export default DogBreed
