
// src/client/reducers/PageReducer.js
import {HOME, MY_MATCH, TOP_DOGS, PROFILE} from '../actions/types'

const initialState = HOME;
//console.log('PageReducer.initialState: ', initialState);

    export default function (state = {}, action = initialState) {
      switch (action.type) {
        case HOME:
          return state

        case MY_MATCH:
      	  return state

      	case TOP_DOGS:
      	  return state

        case PROFILE:
        return state

        default:
          return state
      }
    }
