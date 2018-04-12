import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class ImageDisplay extends PureComponent {
static propTypes ={
  imagedisplay: PropTypes.func.isRequired
}
  render() {
return (
  <div>

  <img src="https://static.boredpanda.com/blog/wp-content/uploads/2017/09/dog-tinder-phil-lifewithmalamutes-fb__700-png.jpg" alt=""/>
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
