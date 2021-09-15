import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Navbar';
import Home from './../pages';

const Nav = () => {
    return (
        <Router>
            <NavBar/>
          <Switch>
              <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
  );
}

export default Nav
