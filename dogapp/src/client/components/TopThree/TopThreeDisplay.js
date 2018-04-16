import React, { PureComponent } from 'react'
import {Dog} from '../../../DummyData'
import Top3 from '../../css/Top3.css'




export class TopThreeDisplay extends PureComponent {

    render() {
      return(
        <div>
        <h2>{Dog[0].breed}</h2>
        <img style={{maxHeight:'500px'}} src={Dog[0].image} alt="{Dog.image}"/>
        <br />
        <h2>{Dog[1].breed}</h2>
        <img style={{maxHeight:'500px'}} src={Dog[1].image} alt="{Dog.image}"/>
        <br />
        <h2>{Dog[2].breed}</h2>
        <img style={{maxHeight:'500px'}} src={Dog[2].image} alt="{Dog.image}"/>
        </div>
    )
    }

  }
