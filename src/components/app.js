import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from "@fortawesome/free-solid-svg-icons";



import Homepage from './pages/home'; 
import NewReleases from './pages/new-releases';
import TheOrder from './pages/recent-releases/the-order';
import NuhUh from './pages/nuh-uh';
import NoMatch from './pages/no-match';

library.add(fab, faDownload);



export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path ="/new-releases" component={NewReleases} />
              <Route exact path="/the-order" component={TheOrder} />
              <Route exact path="/nuh-uh" component={NuhUh} />
              
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>  
      </div>
    );
  }
}
