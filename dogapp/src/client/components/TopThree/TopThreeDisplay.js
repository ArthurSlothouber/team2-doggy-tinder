import React, { PureComponent } from 'react'
import {Dog} from '../../../DummyData'




export class TopThreeDisplay extends PureComponent {

    render() {
      return(
        <div>
        <h1> Your TopDOGS </h1>
        <br />
        <h2>{Dog[0].breed}</h2>
        <img src={Dog[0].image} alt="{Dog.image}"/>
        <br />
        <h2>{Dog[1].breed}</h2>
        <img src={Dog[1].image} alt="{Dog.image}"/>
        <br />
        <h2>{Dog[2].breed}</h2>
        <img src={Dog[2].image} alt="{Dog.image}"/>
        </div>
    )
    }

  }
