import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Navbar';
import Home from './../pages';
import MenuPage from '../pages/MenuPage';
import GalleryPage from '../pages/GalleryPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import EventsPage from '../pages/EventsPage';

const Nav = () => {
    return (
        <Router>
            <NavBar/>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={AboutPage}/>
              <Route path='/events' component={EventsPage}/>
              <Route path='/menu' component={MenuPage}/>
              <Route path='/gallery' component={GalleryPage}/>
              <Route path='/contact' component={ContactPage}/>


          </Switch>
        </Router>
  );
}

export default Nav
