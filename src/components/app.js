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
import PromiseUThat from './pages/recent-releases/promise-u-that';
import KnockKnock from './pages/recent-releases/knock-knock';
import TheVisit from './pages/recent-releases/the-visit-remix';
import StimulantVip from './pages/recent-releases/stimulant-vip';
import GhostWobbleVip from './pages/recent-releases/ghost-wobble-vip';
import ComingSoon from './pages/recent-releases/coming-soon';
import SpaceCreamAlbum from './pages/recent-releases/space-cream-album/space-cream-album';
import SpaceCreamFullAlbum from './pages/recent-releases/space-cream-album/space-cream-full-album';
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
              <Route exact path="/promise-u-that" component={PromiseUThat} />
              <Route exact path="/the-order" component={TheOrder} />
              <Route exact path="/chibs-knock-knock-remix" component={KnockKnock} />
              <Route exact path="/spaceghost-thevisit-remix" component={TheVisit} />
              <Route exact path ="/stimulant-vip" component={StimulantVip} />
              <Route exact path = "/ghost-wobble-vip" component={GhostWobbleVip} />
              <Route exact path = "/space-cream-ep" component={SpaceCreamAlbum} />
              <Route exact path = "/space-cream-full-album" component={SpaceCreamFullAlbum} />

              <Route exact path="/coming-soon" component={ComingSoon} />
              <Route exact path="/nuh-uh" component={NuhUh} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>  
      </div>
    );
  }
}
