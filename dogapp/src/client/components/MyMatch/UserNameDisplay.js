import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {User} from '../../../DummyData';


export class UserNameDisplay extends PureComponent {
  static propTypes = {
    username: PropTypes.string.isRequired
  }
  render() {
    const username = this.props.user;
  return (
    <div>{username}</div>
  )
  }
}
// const mapStateToProps = function (state, props) {
//   return {
//     username: state.username
//   }
// }
export default UserNameDisplay
