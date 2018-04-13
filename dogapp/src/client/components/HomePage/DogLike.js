import React, { PureComponent } from 'react'
import {Dog} from '../../../DummyData'
import DogImage from './DogImage'
import DogBreed from './DogBreed'

import { connect } from 'react-redux'

import {LikeDog} from '../../actions/LikeDog'
import {DisLikeDog} from '../../actions/LikeDog'
import store from '../../../store'

import '../../css/DogLike.css'
import '../../css/DogDisLike.css'


class DogLike extends PureComponent {

 constructor(){
   super();

    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleDisLikeClick = this.handleDisLikeClick.bind(this);
 }




  handleLikeClick(){
    console.log("handleclicked")
   console.log("url"+this.props.DogReducer.dogurl)
    store.dispatch(LikeDog(this.props.DogReducer.breed,this.props.DogReducer.dogurl,this.props.DogReducer.Likes,this.props.DogReducer.Dislikes))
  }

  handleDisLikeClick(){
    console.log("handleclicked")
   console.log("url"+this.props.DogReducer.dogurl)
    store.dispatch(DisLikeDog(this.props.DogReducer.breed,this.props.DogReducer.dogurl,this.props.DogReducer.Likes,this.props.DogReducer.Dislikes))
  }

  render() {

    console.log("inside render")
    return(


      <div>


     <DogBreed dogbreed={this.props.DogReducer.breed} />
     <DogImage dogurl={this.props.DogReducer.dogurl} />
     <button className="DogDisLike" onClick={this.handleDisLikeClick}>
     Dislike</button>

     <button className="DogLike" onClick={this.handleLikeClick}>
        Like</button>


      </div>

    )
  }
}

function dogClick(state){
  let url=Math.floor(Math.random() * Dog.length);
  /*this.setState({
  dogurl:Dog[url].image,
  breed:Dog[url].breed},
)*/
  state.DogReducer.breed=Dog[url].DogBreed
  state.DogReducer.dogurl=Dog[url].image

}

const mapStateToProps=function(state){

  console.log("inside mapStateToProps")
  console.log(state.DogReducer);
  dogClick(state)
  return{
    DogReducer:state.DogReducer
  }
}

function mapDispatchToProps(dispatch){
  console.log("inside mapDispatchToProps")

  return{
    LikeDog:LikeDog,
    DisLikeDog:DisLikeDog
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DogLike)
