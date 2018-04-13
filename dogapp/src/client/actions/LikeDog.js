import {LIKE_DOG} from './types'
import {DISLIKE_DOG} from './types'

export  function LikeDog(breed,dogurl,Likes,Dislikes)
{
  console.log("inside action"+breed +dogurl);
  Likes++;
  return {
  type: LIKE_DOG,
  payload:{breed,dogurl,Likes,Dislikes}
  }


}

export function DisLikeDog(breed,dogurl,Likes,Dislikes)
{
  console.log("inside action"+breed +dogurl);
  Dislikes++;
  return {
  type: DISLIKE_DOG,
  payload:{breed,dogurl,Likes,Dislikes}
  }


}
