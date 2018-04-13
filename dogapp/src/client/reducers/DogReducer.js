// src/client/reducers/DogReducer.js
import { LIKE_DOG } from '../actions/types'
import { DISLIKE_DOG } from '../actions/types'

const initialState = { breed:'Beagle',dogurl:'http://cdn1-www.dogtime.com/assets/uploads/2011/01/file_23012_beagle-460x290.jpg',Likes:0,Dislikes:0};

export default function(state=initialState, { type, payload }) {
  console.log("inside reducer")
  switch(type){
  case LIKE_DOG:
  return payload

  case DISLIKE_DOG:
  return payload

  default:
  return state
}
}
