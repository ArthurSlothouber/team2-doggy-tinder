import React, { Component } from "react";
import Nav from "./Nav.js";

class Container extends Component {
  state = {
    currentPage: "home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
    //console.log('currentPage: ', currentPage)
  };


  render() {
    return(
      <div>
        <Nav
          currentPage = {this.state.currentPage}
          handlePageChange = {this.handlePageChange}
        />
      </div>
    );
  }

}

export default Container;
