import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import '../../css/DogImage.css'
import {Dog} from '../../../DummyData'


class DogImage extends PureComponent{

  render(){

    //let url=Math.floor(Math.random() * Dog.length);
    //let dogurl=Dog[url].image;

    return (
      <div>
        <img style={{maxHeight:'500px'}} src={this.props.dogurl} alt="{DogInfo.breed}"/>
      </div>
    )
  }
}

export default DogImage
