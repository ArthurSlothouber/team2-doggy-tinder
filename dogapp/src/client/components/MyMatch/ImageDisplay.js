import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {User} from '../../../DummyData';

export class ImageDisplay extends PureComponent {
render() {
    console.log('display')
return (
  <div>

  <img src={User[0].image} alt="{User.image}"/>
</div>
  )
  }
}
// const mapStateToProps = function (state, props) {
//   return {
//     userimage: state.userimage
//   }
// }
export default ImageDisplay
