import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';



import Homepage from './pages/home';
import NewRelease from './pages/new-release';

library.add(fab);



export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/new-release" component={NewRelease} />
            </Switch>
          </div>
        </Router>  
      </div>
    );
  }
}
