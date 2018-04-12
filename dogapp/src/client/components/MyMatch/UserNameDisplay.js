import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {User} from '../../../DummyData';


export class UserNameDisplay extends PureComponent {

  render() {
    console.log('name')
return(
    <div>
      <h1>{User[0].username}
      </h1>
      </div>
    )
  }
}
// const mapStateToProps = function (state, props) {
//   return {
//     username: state.username
//   }
// }
export default UserNameDisplay
