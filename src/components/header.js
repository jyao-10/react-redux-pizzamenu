import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Contact from './Contact';
import Order from './Order';
import Sauce from './Sauce';
import Pizza from './pizza/Pizza'
import Home from './Home';


class Header extends Component {
  
    render(){
      return(
  
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
  
              <li>
                <Link to="/contact">Contact</Link>
              </li>

  
              <li>
                <Link to="/sauce">Sauce</Link>
              </li>
  
              <li>
                <Link to="/toppings">Toppings</Link>
              </li>
  
              <li>
                <Link to="/Order">Final Order</Link>
              </li>
  
  
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Contact">
              <Contact />
            </Route>
  
            <Route path="/Sauce">
              <Sauce />
            </Route>
  
            <Route path="/Toppings">
              <Pizza />
            </Route>
  
  
            <Route path="/Order">
              <Order />
            </Route>
  
  
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      
      );
    }
  }
  

  export default Header;
  