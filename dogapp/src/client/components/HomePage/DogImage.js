import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import '../../css/DogImage.css'

class DogImage extends PureComponent {
  render() {
    const {DogInfo} = this.props
    return (
      <div>
        <img src="{ DogInfo.url }" alt="{DogInfo.breed}"/>
      </div>
    )
  }
}

export default DogImage
