import React, { PureComponent } from 'react'
import '../css/TitleHeader.css'


class TitleHeader extends PureComponent {
   render(){

      return (
        <div className="TitleHeader">
          {this.props.title}
        </div>
      )

  }
}

export default TitleHeader
