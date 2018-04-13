
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import '../../css/DogDisLike.css'

export class DogDislike extends PureComponent {
  static propTypes = {
    dogdislike: PropTypes.func.isRequired
  }
  // handleClick = () => {
  //  prompt("clicked dislike button")
  // }
  render() {
    return (
      <button className="DogDisLike">
        {/* onClick={this.handleClick}
        src = "url"
        className="DogDislike"> */}
        Dislike
      </button>
    )
  }
}
  export default DogDislike

