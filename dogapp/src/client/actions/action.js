import * as request from 'superagent'

const baseUrl = 'https://dog.ceo/api/breeds/image/random'

export const LIKE_DOG = 'LIKE_DOG'
export const DISLIKE_DOG = 'DISLIKE_DOG'

export const fetchDog = (DogId) => (dispatch) => {
  request
    .get(`${baseUrl}/dogs/${dogId}`)
    .then(response => dispatch({
      type: FETCHED_DETAILED_PRODUCT,
      payload: response.body
    }))
    .catch(err => alert(err))
}
