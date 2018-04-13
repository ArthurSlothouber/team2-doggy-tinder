
import React, { Component } from 'react';
import './client/css/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Container from './client/containers/container'
import Home from './client/containers/Home'
import Match from './client/containers/Match'
import Top3 from './client/containers/Top3'
import Profile from './client/containers/Profile'
import './client/css/App.css'
import Nav from './client/containers/Nav'



const App = () =>

  <Router>
    <div>

      <div className="logoHeader">Doggy Lover Dating</div>
      <br />
      <Route exact path="/" component={Home} />
      <Route exact path="/my-match" component={Match} />
      <Route exact path="/my-top-3" component={Top3} />
      <Route exact path="/my-profile" component={Profile} />
      <Container />
    </div>
<<<<<<< HEAD
  

      </Router>
=======
    </Router>
>>>>>>> 34c2c848d737e1c7c13d1dab6d7aa4608e9e40ac



export default App;
