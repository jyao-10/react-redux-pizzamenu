import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Contact from './Contact';
import Order from './Order';
import Sauce from './Sauce';
import Pizza from './pizza/Pizza';
import Home from './Home';


class Linker extends Component {
  
    render(){
      return(

        <Router>
        <div>
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
  

  export default Linker;
  