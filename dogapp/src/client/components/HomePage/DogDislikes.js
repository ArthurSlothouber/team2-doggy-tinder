import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
export class DogDislike extends PureComponent {
  static propTypes = {
    dogdislike: PropTypes.func.isRequired
  }
  // handleClick = () => {
  //  prompt("clicked dislike button")
  // }
  render() {
    return (
      <button>
        {/* onClick={this.handleClick}
        src = "url"
        className="DogDislike"> */}
        Dislike
      </button>
    )
  }
}
  export default DogDislike
