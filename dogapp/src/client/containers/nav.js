import React from 'react';
import '../css/nav.css';
import NavButton from '../components/NavButton'

class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        alert('click');
    }

    render() {

        return (
            <div>
                <button className="NavButton" onClick={(event) => this.handleClick(event)}>{this.label = "home"}</button>
                <button className="NavButton" onClick={(event) => this.handleClick(event)}>{this.label = "show my match"}</button>
                <button className="NavButton" onClick={(event) => this.handleClick(event)}>{this.label = "my top 3 dogs"}</button>
                <button className="NavButton" onClick={(event) => this.handleClick(event)}>{this.label = "profile"}</button>
            </div >
        );
    }
};

export default Nav;
