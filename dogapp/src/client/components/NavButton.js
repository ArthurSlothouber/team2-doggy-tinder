// src/components/Homepage/NavButton.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../css/NavButton.css'

class NavButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    //ButtonImg: PropTypes.string.isRequired,

  }

  render() {
    return (
      <button onClick={() => this.props.whenClicked() } type="button">
          {this.props.label}
      </button>
    )
  }
}

export default NavButton;
