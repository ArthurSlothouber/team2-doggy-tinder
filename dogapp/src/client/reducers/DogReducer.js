// src/client/reducers/DogReducer.js
const initialState = { dogsLiked: 0 };
export default (state = initialState, { type, payload } = {}) => {
  console.log('DogReducer.initialState: ', initialState);
  return state
}
